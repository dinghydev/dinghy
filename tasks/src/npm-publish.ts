// https://github.com/denoland/dnt

import { execa } from 'execa'
import { forEachWorkspace } from './utils/workspace.ts'

forEachWorkspace(async (name, srcPath, targetPath, denoJsonc) => {
  await execa('npm', ['publish'], {
    cwd: targetPath,
    stdio: 'inherit',
  })
})
