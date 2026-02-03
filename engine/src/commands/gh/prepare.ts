import type { CmdInput } from '@dinghy/cli'
import { projectVersionRelease } from '@dinghy/cli'
import Debug from 'debug'
import {
  appendToGithubEnv,
  appendToGithubFile,
} from '../../utils/githubUtils.ts'
import { Args } from '@std/cli/parse-args'
const debug = Debug('gh:prepare')
export const schema: CmdInput = {
  description:
    'Prepares the GitHub workflow based on incoming event data. Extracts the issue number and action run ID from the event payload and sets them as environment variables. This is utilized by the [dinghydev/setup-dinghy](https://github.com/dinghydev/setup-dinghy/blob/main/action.yml) GitHub Action.',
}
export const run = (_args: Args) => {
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
      appendToGithubEnv(
        `GITHUB_ISSUE_NUMBER=${eventInfo.issue.number}`,
      )
      const runId = eventInfo.issue.body.match(/\/actions\/runs\/(\d+)/)
        ?.[1]
      if (runId) {
        appendToGithubEnv(
          `GITHUB_ISSUE_RUN_ID=${runId}`,
        )
      }
    }
  }
}
