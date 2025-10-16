import { execa } from 'execa'
import { walk } from '@std/fs'
import { projectRoot } from '../../cli/src/utils/projectRoot.ts'

const folderWithExamples = [
  'sites/www',
  'examples/web',
  'examples/diagram/sequence',
] as string[]

const findDinghyProjects = async () => {
  const dinghyProjects = [] as string[]
  for (const folder of folderWithExamples) {
    const currentDir = `${projectRoot}/${folder}`
    for await (const entry of walk(currentDir, { includeDirs: false })) {
      if (entry.path.endsWith('.drawio') && entry.path.includes('/output/')) {
        const projectPath = entry.path.substring(
          0,
          entry.path.lastIndexOf('/output/'),
        )
        if (!dinghyProjects.includes(projectPath)) {
          dinghyProjects.push(projectPath)
        }
      }
    }
  }
  return dinghyProjects
}

const renderProjectWithoutPng = async (projectPath: string) => {
  console.log(`Rendering ${projectPath}...`)
  await execa('deno', [
    'run',
    '-A',
    'src/index.ts',
    'render',
    '--no-diagram-png',
    `--app-home=${projectPath}`,
  ], {
    cwd: `${projectRoot}/engine`,
    stdio: 'inherit',
    env: { CI_SKIP_GIT_DIFF_CHECK: 'true' },
  })
}

if (import.meta.main) {
  const dinghyProjects = await findDinghyProjects()
  for (const project of dinghyProjects) {
    await renderProjectWithoutPng(project)
  }
}
