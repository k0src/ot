#!/usr/bin/env node

import fs from "fs";
import path from "path";

const [, , componentName, relativePath = ""] = process.argv;

if (!componentName) process.exit(1);

const baseDir = path.resolve(process.cwd(), relativePath);
const componentDir = path.join(baseDir, componentName);

fs.mkdirSync(componentDir, { recursive: true });

const tsxPath = path.join(componentDir, `${componentName}.tsx`);
const cssPath = path.join(componentDir, `${componentName}.module.css`);

fs.writeFileSync(tsxPath, "");
fs.writeFileSync(cssPath, "");
