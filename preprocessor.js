import path from "path";
import fs from "fs";
import ejs from "ejs";
import { globby } from "globby";
import async from "async";

async function scaner(dir, outdir, vars) {
  const files = await globby(dir);
  await async.forEach(files, (item, cb) => {
    preprocessor(item, outdir, vars);
  });
}

function preprocessor(file, outdir, vars) {
  let dir = path.dirname(file);
  if (path.extname(file) === ".ejs") {
    let outfilename = getNewFileName(dir, outdir, file);
    fs.mkdirSync(path.dirname(outfilename), { recursive: true });
    ejs.renderFile(file, vars, (err, str) => {
      if (err) throw err;
      fs.writeFile(outfilename, str, { encoding: "utf-8" }, (err) => {
        if (err) throw err;
        console.log("file", file, "is rendered to", outfilename);
      });
    });
  } else {
    let outfilename = getNewFileName(dir, outdir, file, false);
    fs.mkdirSync(path.dirname(outfilename), { recursive: true });
    fs.copyFile(file, outfilename, (err) => {
      if (err) throw err;
      console.log(`file ${file} was copied`);
    });
  }
}

function getNewFileName(dir, outdir, file, rename = true) {
  let realdir = dir.split("/");
  realdir.shift();
  realdir = realdir.join("/");
  return path.join(
    outdir,
    realdir,
    rename ? `${path.basename(file, ".ejs")}.html` : path.basename(file)
  );
}

export default async ({ dir, outdir, vars }) => {
  await scaner(dir, outdir, vars);
};
