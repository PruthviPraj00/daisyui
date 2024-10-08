import fs from 'fs';
import path from 'path';
import { transform } from 'lightningcss';

export const minify = async (filePath) => {
  if (!fs.existsSync(filePath)) {
    return;
  }
  const css = await fs.promises.readFile(filePath, 'utf8');
  const { code } = transform({
    filename: filePath,
    code: Buffer.from(css),
    minify: true,
  });
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const modifiedCode = `/*! 🌼 daisyUI ${packageJson.version} – MIT License */ ` + code;
  await fs.promises.writeFile(filePath, modifiedCode);
}

export const minifyCssInDirectory = async (directories) => {
  await Promise.all(directories.map(async (dir) => {
    const directory = path.join(dir);
    const files = fs.readdirSync(directory)
      .filter(file => path.extname(file).toLowerCase() === '.css')
      .map(file => path.join(directory, file));

    await Promise.all(files.map(minify));
  }));
}
