const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "images", "projects");
fs.mkdirSync(outDir, { recursive: true });

const shots = [
  {
    url: "https://temple-run1.vercel.app/",
    out: path.join(outDir, "temple-run.png"),
  },
  {
    url: "https://mercy-marketing-store.vercel.app/",
    out: path.join(outDir, "mercy-marketing-store.png"),
  },
  {
    url: "https://mercy-hospitality-website.vercel.app/",
    out: path.join(outDir, "mercy-hospitality.png"),
  },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  for (const { url, out } of shots) {
    console.log("Capturing", url);
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(3500);
    await page.screenshot({ path: out, fullPage: false });
    console.log("Saved", out);
  }

  await browser.close();
})();
