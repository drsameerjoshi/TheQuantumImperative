import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/src/pages/Home";


const indexPath = path.resolve(import.meta.dirname, "..", "dist", "public", "index.html");
const html = fs.readFileSync(indexPath, "utf8");
const markup = renderToString(createElement(Home));
const withMarkup = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
const stylesheetPattern = /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/;
const stylesheetMatch = withMarkup.match(stylesheetPattern);
if (!stylesheetMatch) {
  throw new Error("Built stylesheet link was not found in dist/public/index.html");
}
const cssPath = path.resolve(import.meta.dirname, "..", "dist", "public", stylesheetMatch[1].replace(/^\//, ""));
const css = fs.readFileSync(cssPath, "utf8");
const output = withMarkup.replace(stylesheetPattern, `<style>${css}</style>`);

if (output === html) {
  throw new Error("Prerender target #root was not found in dist/public/index.html");
}

fs.writeFileSync(indexPath, output, "utf8");
fs.unlinkSync(cssPath);
console.log(`Prerendered homepage markup and inlined critical styles into ${indexPath}`);
