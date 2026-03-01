const Jimp = require("jimp");

async function main() {
    try {
        console.log("Reading image...");
        const originalImage = await Jimp.read("public/logo.jpg");

        const w = originalImage.bitmap.width;
        const h = originalImage.bitmap.height;
        console.log(`Image dimensions: ${w}x${h}`);

        let colorCounts = {};

        // Scale down image for color extraction to save memory/time
        const colorClone = originalImage.clone().resize(256, Jimp.AUTO);
        colorClone.scan(0, 0, colorClone.bitmap.width, colorClone.bitmap.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];
            const alpha = this.bitmap.data[idx + 3];

            // Ignore white, near white, black, near black, or transparent
            if (alpha > 10 && !(red > 240 && green > 240 && blue > 240) && !(red < 15 && green < 15 && blue < 15)) {
                // bin colors to reduce noise
                const r = Math.round(red / 10) * 10;
                const g = Math.round(green / 10) * 10;
                const b = Math.round(blue / 10) * 10;
                const rgb = `${r},${g},${b}`;
                colorCounts[rgb] = (colorCounts[rgb] || 0) + 1;
            }
        });

        let dominant = "249,115,22"; // Default fallback orange
        let max = 0;
        for (const [color, count] of Object.entries(colorCounts)) {
            if (count > max) {
                max = count;
                dominant = color;
            }
        }

        const [dr, dg, db] = dominant.split(",");
        const toHex = (n) => {
            const hex = parseInt(n, 10).toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        };
        const hexColor = `#${toHex(dr)}${toHex(dg)}${toHex(db)}`;
        console.log("DOMINANT_COLOR:" + hexColor);

        console.log("Removing background...");
        originalImage.scan(0, 0, w, h, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];

            // if white or very close to white
            if (red > 240 && green > 240 && blue > 240) {
                this.bitmap.data[idx + 3] = 0; // Set alpha to 0 (transparent)
            }
        });

        await originalImage.writeAsync("public/logo-transparent.png");
        console.log("Saved transparent logo.");
    } catch (e) {
        console.error("Error processing image:", e);
    }
}

main();
