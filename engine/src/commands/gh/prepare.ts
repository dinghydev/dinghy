import type {
  CommandArgs,
  CommandContext,
  CommandOptions,
  Commands,
} from '@dinghy/cli'
import { OPTIONS_SYMBOL, projectVersionRelease, RUN_SYMBOL } from '@dinghy/cli'
import Debug from 'debug'
const debug = Debug('gh:prepare')

const options: CommandOptions = {
  description: {},
  cmdDescription: 'Prepare github workflow',
}

const appendToGithubFile = (name: string, text: string) => {
  const githubPath = Deno.env.get(name) as string
  if (githubPath) {
    debug('appending to %s with text %s', githubPath, text)
    Deno.writeTextFileSync(githubPath, `${text}\n`, {
      append: true,
    })
  } else {
    throw new Error(`${name} is not set`)
  }
}

const run = (_context: CommandContext, _args: CommandArgs) => {
  if (debug.enabled) {
    debug('Environment variables:')
    for (const [key, value] of Object.entries(Deno.env.toObject())) {
      debug(`${key}=${value}`)
    }
  }

  appendToGithubFile(
    'GITHUB_PATH',
    `${Deno.env.get('HOST_USER_HOME')}/.dinghy/bin`,
  )
  appendToGithubFile(
    'GITHUB_OUTPUT',
    `dinghy-version=${projectVersionRelease()}`,
  )
  if (Deno.env.get('GITHUB_EVENT_PATH')) {
    const eventInfo = JSON.parse(
      Deno.readTextFileSync(Deno.env.get('GITHUB_EVENT_PATH') as string),
    )
    debug('eventInfo %O', eventInfo)
    if (eventInfo.issue?.number) {
      appendToGithubFile(
        'GITHUB_ENV',
        `GITHUB_ISSUE_NUMBER=${eventInfo.issue.number}`,
      )
      const runId = eventInfo.issue.body.match(/\/actions\/runs\/(\d+)/)
        ?.[1]
      if (runId) {
        appendToGithubFile(
          'GITHUB_ENV',
          `GITHUB_ISSUE_RUN_ID=${runId}`,
        )
      }
    }
  }
}

const commands: Commands = {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
}

export default commands
