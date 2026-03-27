import { existsSync } from '@std/fs/exists'
import { dirname, fromFileUrl, resolve } from '@std/path'
import { walkSync } from '@std/fs/walk'
import chalk from 'chalk'
import Debug from 'debug'
import type { CmdInput } from '@dinghy/cli'
import { DinghyError, resolveDinghySkills } from '@dinghy/cli'
import { Args } from '@std/cli/parse-args'
const debug = Debug('dinghy:skill')

const templatesDir = resolve(
  dirname(fromFileUrl(import.meta.url)),
  '../../templates/skills',
)

export const schema: CmdInput = {
  description: 'Install or update Dinghy skills (Claude Code slash commands).',
  options: [
    {
      name: 'skills-path',
      description:
        'The target folder to install skills into. Auto-detected from .claude/skills or ~/.claude/skills if not provided.',
      required: false,
    },
    {
      name: 'quiet',
      description: 'Quiet mode',
      boolean: true,
      alias: 'q',
    },
  ],
}

const resolveSkillsPath = (
  args: Args,
): { skillsPath: string; isRefresh: boolean } => {
  let skillsPath = args['skills-path']
  let isRefresh = false
  if (!skillsPath) {
    const { dinghySkills, localSkills, userSkills } = resolveDinghySkills()
    if (dinghySkills) {
      skillsPath = dinghySkills
      isRefresh = true
    } else {
      if (existsSync(localSkills)) {
        debug('Use local skills folder at %s', localSkills)
        skillsPath = localSkills
      } else if (existsSync(userSkills)) {
        debug('Use user skills folder at %s', userSkills)
        skillsPath = userSkills
      }
    }
  }

  if (!skillsPath) {
    throw new DinghyError(
      'Could not detect skills folder. Please provide skills-path argument:\n\n  dinghy skill --skills-path=<skills-path>',
      'SKILLS_PATH_REQUIRED',
    )
  }
  return { skillsPath, isRefresh }
}

const showPath = (path: string) => path.replace('/host_user_home', '~')

export const run = (args: Args) => {
  const { skillsPath, isRefresh } = resolveSkillsPath(args)

  if (!args.quiet) {
    console.log(
      `${isRefresh ? 'Refreshing' : 'Installing'} Dinghy skills to ${
        showPath(skillsPath)
      } ...`,
    )
  }

  for (const entry of walkSync(templatesDir, { includeFiles: true })) {
    if (entry.isFile) {
      const relativePath = entry.path.substring(templatesDir.length + 1)
      const targetPath = `${skillsPath}/${relativePath}`
      const targetDir = dirname(targetPath)

      Deno.mkdirSync(targetDir, { recursive: true })
      Deno.copyFileSync(entry.path, targetPath)

      if (!args.quiet) {
        console.log(`  copied to ${chalk.grey(showPath(targetPath))}`)
      }
    }
  }

  if (!args.quiet) {
    console.log(
      `\nDinghy skills ${isRefresh ? 'refreshed' : 'installed'} successfully.`,
    )
  }
}
