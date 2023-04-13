#!/usr/bin/env node
import fs from "fs";
import preprocessor from "./preprocessor.js";

const config = JSON.parse(fs.readFileSync("./ejsp.json", "utf-8"));

await preprocessor(config);
