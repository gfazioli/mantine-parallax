import { generateDeclarations } from 'mantine-docgen-script';
import path from 'path';

const getComponentPath = (componentPath: string) =>
  path.join(process.cwd(), 'package/src', componentPath);

generateDeclarations({
  componentsPaths: [getComponentPath('Parallax.tsx')],
  tsConfigPath: path.join(process.cwd(), 'tsconfig.json'),
  outputPath: path.join(process.cwd(), 'docs'),
});
