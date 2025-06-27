// https://github.com/denoland/dnt

import { execa } from 'execa'
import { forEachWorkspace } from './utils/workspace.ts'

forEachWorkspace(async (_name, _srcPath, targetPath, _denoJsonc) => {
  await execa('npm', ['publish'], {
    cwd: targetPath,
    stdio: 'inherit',
  })
})
