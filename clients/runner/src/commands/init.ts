import { existsSync } from '@std/fs/exists'
import type {
  CommandOptions,
  CommandArgs,
  Command,
  CommandContext,
} from '../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../types.ts'
import { execa } from 'execa'
import chalk from 'chalk'
import Debug from 'debug'
const debug = Debug('init')

const options: CommandOptions = {
  boolean: ['git', 'gitlab', 'github'],
  description: {
    git: 'Init git repository',
    gitlab: 'Generate GitLab .gitlab-ci.yml',
    github: 'Generate GitHub Actions',
  },
  arguments: {
    project: {
      description:
        'The folder name of the project, must be a none exist folder',
      required: true,
    },
  },
  negatable: ['git'],
  default: {
    git: true,
  },
  cmdDescription: 'Create a new ReactIAC project',
  cmdAlias: ['create-project'],
}

const generateFile = async (
  projectHome: string,
  fileName: string,
  templateName: string,
  folder?: string,
) => {
  if (folder) {
    Deno.mkdirSync(`${projectHome}/${folder}`, { recursive: true })
  }
  const filePath = folder ? `${folder}/${fileName}` : fileName
  const templateUrl = `https://play.reactiac.dev/download/latest/${templateName}`
  debug('Downloading template from %s', templateUrl)
  let template = await fetch(templateUrl).then((res) => res.text())
  if (template.includes('PROJECT_NAME_PLACE_HOLDER')) {
    const projectName = projectHome.split('/').pop() as string
    template = template.replace(/PROJECT_NAME_PLACE_HOLDER/g, projectName)
  }
  Deno.writeTextFileSync(`${projectHome}/${filePath}`, template)
  console.log(chalk.grey(`  generated ${filePath}`))
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  console.log('Creating new ReactIAC project ...')
  const projectHome = args.project as string
  if (existsSync(projectHome)) {
    console.log(chalk.red(`Error: project ${projectHome} already exists`))
    Deno.exit(1)
  }

  Deno.mkdirSync(projectHome, { recursive: true })
  console.log(chalk.grey(`  created folder ${projectHome}`))

  await generateFile(projectHome, 'App.tsx', 'template.app.txt')
  await generateFile(projectHome, 'README.md', 'template.readme.txt')

  if (args.github) {
    await generateFile(
      projectHome,
      'reactiac.yml',
      'template.github.txt',
      '.github/workflows',
    )
  }

  if (args.gitlab) {
    await generateFile(projectHome, '.gitlab-ci.yml', 'template.gitlab.txt')
  }

  if (args.git) {
    await generateFile(projectHome, '.gitignore', 'template.gitignore.txt')
    await execa('git', ['init', '--initial-branch=main'], {
      cwd: projectHome,
      stdio: 'inherit',
    })
  }

  console.log(chalk.green(`Created RactIAC project ${projectHome}`))
  console.log('\nYou may now run the following commands to get started:')
  console.log(chalk.gray(`\n  cd ${projectHome}`))
  console.log(chalk.gray('  reactiac dev'))
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
