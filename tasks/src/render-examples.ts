import { execa } from 'execa'
import { existsSync, walk } from '@std/fs'
import { projectRoot } from '../../cli/src/utils/projectRoot.ts'
import { dirname } from '@std/path/dirname'
import chalk from 'chalk'

const folderWithExamples = [
  'sites/www',
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

const renderProject = async (projectPath: string) => {
  console.log(`Rendering ${projectPath}...`)
  const args = [
    'run',
    '-A',
    'src/index.ts',
    'render',
    `--app-home=${projectPath}`,
    ...Deno.args,
  ]
  await execa('deno', args, {
    cwd: `${projectRoot}/engine`,
    stdio: 'inherit',
    env: {
      CI_SKIP_GIT_DIFF_CHECK: 'true',
      NODE_OPTIONS: undefined, // VSCode pass this cause unnecessary png warning message
    },
  })
  if (existsSync(`${projectPath}/s3-files`)) {
    const replacePath = dirname(projectPath)
    const tfJsonFile = `${projectPath}/output/app/app.tf.json`
    const tfJsonText = Deno.readTextFileSync(tfJsonFile)
    const updatedTfJsonText = tfJsonText.replaceAll(
      replacePath,
      '/dinghy/engine/workspace',
    )
    Deno.writeTextFileSync(tfJsonFile, updatedTfJsonText)
    console.log(`Updated tf json file ${chalk.red(tfJsonFile)}`)
  }
}

if (import.meta.main) {
  const dinghyProjects = await findDinghyProjects()
  for (const project of dinghyProjects) {
    await renderProject(project)
  }
}
