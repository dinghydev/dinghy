import { existsSync } from '@std/fs/exists'
import { execa } from 'execa'
import chalk from 'chalk'
import Debug from 'debug'
import { CmdInput } from '../services/cli/types.ts'
import { Args } from '@std/cli/parse-args'
const debug = Debug('init')

export const schema: CmdInput = {
  description: 'Create a new Dinghy project with recommended files.',
  options: [
    {
      name: 'git',
      description: 'Init git repository if not exists',
      boolean: true,
      default: true,
      negatable: true,
    },
    {
      name: 'gitlab',
      description: 'Generate GitLab .gitlab-ci.yml',
      boolean: true,
    },
    {
      name: 'github',
      description: 'Generate GitHub Actions',
      boolean: true,
    },
    {
      name: 'quiet',
      description: 'Quiet mode',
      boolean: true,
    },
  ],
  alias: ['create-project'],
  args: [
    {
      name: 'project',
      description:
        'The target folder of the project, if not provided, the current folder will be used',
      required: false,
    },
  ],
}

const generateFile = async (
  args: Args,
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

export const run = async (args: Args) => {
  if (!args.quiet) {
    console.log('Creating new Dinghy project ...')
  }
  const projectHome = args.project || Deno.cwd()

  Deno.mkdirSync(projectHome, { recursive: true })
  if (!args.quiet && args.project) {
    console.log(chalk.grey(`  created folder ${projectHome}`))
  }

  await generateFile(args, projectHome, 'app.tsx', 'app.txt')
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

  if (args.git) {
    await generateFile(
      args,
      projectHome,
      '.gitignore',
      'gitignore.txt',
    )
    if (!existsSync(`${projectHome}/.git`)) {
      await execa('git', ['init', '--initial-branch=main'], {
        cwd: projectHome,
        stdio: 'inherit',
      })
    }
  }
  if (!args.quiet) {
    console.log('\nYou may now run the following commands to get started:')
    console.log(chalk.gray(`\n  cd ${projectHome}`))
    console.log(chalk.gray('  dinghy devcontainer'))
  }
}
