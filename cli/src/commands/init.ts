import { existsSync } from '@std/fs/exists'
import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../types.ts'
import { execa } from 'execa'
import chalk from 'chalk'
import Debug from 'debug'
const debug = Debug('init')

const options: CommandOptions = {
  boolean: ['git', 'gitlab', 'github', 'quiet', 'debug'],
  description: {
    git: 'Init git repository',
    gitlab: 'Generate GitLab .gitlab-ci.yml',
    github: 'Generate GitHub Actions',
    quiet: 'Quiet mode',
  },
  arguments: {
    project: {
      description: 'The target folder of the project',
      required: true,
    },
  },
  negatable: ['git'],
  default: {
    git: true,
  },
  cmdDescription: 'Create a new Dinghy project',
  cmdAlias: ['create-project'],
}

const generateFile = async (
  args: CommandArgs,
  projectHome: string,
  fileName: string,
  templateName: string,
  folder?: string,
) => {
  if (folder) {
    Deno.mkdirSync(`${projectHome}/${folder}`, { recursive: true })
  }
  const filePath = folder ? `${folder}/${fileName}` : fileName
  const templateUrl = `https://get.dinghy.dev/templates/${templateName}`
  debug('Downloading template from %s', templateUrl)
  let template = await fetch(templateUrl).then((res) => res.text())
  if (template.includes('PROJECT_NAME_PLACE_HOLDER')) {
    const projectName = projectHome.split('/').pop() as string
    template = template.replace(/PROJECT_NAME_PLACE_HOLDER/g, projectName)
  }
  Deno.writeTextFileSync(`${projectHome}/${filePath}`, template)
  if (!args.quiet) {
    console.log(chalk.grey(`  generated ${filePath}`))
  }
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  if (!args.quiet) {
    console.log('Creating new Dinghy project ...')
  }
  const projectHome = args.project as string

  Deno.mkdirSync(projectHome, { recursive: true })
  if (!args.quiet) {
    console.log(chalk.grey(`  created folder ${projectHome}`))
  }

  await generateFile(args, projectHome, 'iac.tsx', 'app.txt')
  await generateFile(args, projectHome, 'README.md', 'readme.txt')

  if (args.github) {
    await generateFile(
      args,
      projectHome,
      'dinghy.yml',
      'github.txt',
      '.github/workflows',
    )
  }

  if (args.gitlab) {
    await generateFile(
      args,
      projectHome,
      '.gitlab-ci.yml',
      'gitlab.txt',
      '.gitlab',
    )
  }

  if (args.git && !existsSync(`${projectHome}/.git`)) {
    await generateFile(
      args,
      projectHome,
      '.gitignore',
      'gitignore.txt',
    )
    await execa('git', ['init', '--initial-branch=main'], {
      cwd: projectHome,
      stdio: 'inherit',
    })
  }
  if (!args.quiet) {
    console.log('\nYou may now run the following commands to get started:')
    console.log(chalk.gray(`\n  cd ${projectHome}`))
    console.log(chalk.gray('  dinghy devcontainer'))
  }
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
