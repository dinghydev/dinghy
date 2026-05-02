import {
  isMr,
  jobName,
  projectDeployThread,
  projectName,
  upsertMrNote,
} from '../../utils/gitUtils.ts'
import { isPr, upsertPrComment } from '../../utils/githubUtils.ts'
import Debug from 'debug'
import {
  temporaryStorageGetFile,
  temporaryStorageSaveFile,
} from '../../utils/s3.ts'
import { dublinTimeNow } from '../../utils/timeUtils.ts'
import { Args } from '@std/cli/parse-args'
import { tfChangesSummary } from './tfChangesSummary.ts'
import { toId } from '@dinghy/cli'
const debug = Debug('tfNotifyChanges')

const threadCache: any = {}
const threadInfo = async (thread: string) => {
  if (!threadCache[thread]) {
    const threadText = await temporaryStorageGetFile(thread)
    if (threadText) {
      threadCache[thread] = JSON.parse(threadText)
    }
  }

  return threadCache[thread]
}

const statusVerb = (
  isApply: boolean,
  error: string | undefined,
): 'failed' | 'applied' | 'pending' => {
  if (error) return 'failed'
  if (isApply) return 'applied'
  return 'pending'
}

export const tfNotifyChanges = async (
  changes: any[],
  args: Args | undefined,
  isApply: boolean,
  error?: string,
) => {
  if (isMr()) {
    await notifyMrChanges(changes, args, isApply, error)
    return
  }
  if (isPr()) {
    await notifyPrChanges(changes, args, isApply, error)
    return
  }
  await notifySlackChanges(changes, args, isApply, error)
}

const renderHeader = (
  jobLink: string,
  status: 'failed' | 'applied' | 'pending',
  stackNames: string,
  stackCount: number,
): string => {
  if (status === 'failed') {
    return `## ${jobLink} failed to apply changes [${stackNames}]`
  }
  if (status === 'applied') {
    return `## ${jobLink} applied changes [${stackNames}]`
  }
  return `## ${jobLink} detected pending changes [${stackNames}] in ${stackCount} stack${
    stackCount > 1 ? 's' : ''
  }`
}

const notifyMrChanges = async (
  changes: any[],
  args: Args | undefined,
  isApply: boolean,
  error: string | undefined,
) => {
  const jobUrl = Deno.env.get('CI_JOB_URL')
  if (!jobUrl) {
    debug('no CI_JOB_URL, skip notify MR changes')
    return
  }
  const status = statusVerb(isApply, error)
  const stackNames = changes.map((s) => s.name).join('|')
  const stackKey = changes.map((s) => s.name).join('-')
  const jobLink = `[${jobName()}](${jobUrl})`
  const body = await tfChangesSummary(changes, args, error, 'markdown')
  const markDown = [
    renderHeader(jobLink, status, stackNames, changes.length),
    '',
    body,
  ].join('\n')
  debug('dinghy mr note mark down: %s', markDown)
  await upsertMrNote(markDown, stackKey)
}

const notifyPrChanges = async (
  changes: any[],
  args: Args | undefined,
  isApply: boolean,
  error: string | undefined,
) => {
  const repo = Deno.env.get('GITHUB_REPOSITORY')
  const runId = Deno.env.get('GITHUB_RUN_ID')
  if (!repo || !runId) {
    debug('missing GITHUB_REPOSITORY or GITHUB_RUN_ID, skip notify PR changes')
    return
  }
  const server = Deno.env.get('GITHUB_SERVER_URL') || 'https://github.com'
  const workflow = Deno.env.get('GITHUB_WORKFLOW') || jobName()
  const jobLink = `[${workflow}](${server}/${repo}/actions/runs/${runId})`
  const status = statusVerb(isApply, error)
  const stackNames = changes.map((s) => s.name).join('|')
  const stackKey = changes.map((s) => s.name).join('-')
  const body = await tfChangesSummary(changes, args, error, 'markdown')
  const markDown = [
    renderHeader(jobLink, status, stackNames, changes.length),
    '',
    body,
  ].join('\n')
  debug('dinghy pr comment mark down: %s', markDown)
  await upsertPrComment(markDown, stackKey)
}

const notifySlackChanges = async (
  changes: any[],
  args: Args | undefined,
  isApply: boolean,
  error: string | undefined,
) => {
  if (!Deno.env.get('SLACK_NOTIFICATION_CHANNEL')) {
    debug('no SLACK_NOTIFICATION_CHANNEL, skip notify changes')
    return
  }
  const options: any = {}
  options.username = `${await projectName()} ${jobName()}`
  const status = statusVerb(isApply, error)
  const stackNames = changes.map((s) => s.name).join('|')
  const stackKey = changes.map((s) => s.name).join('-')
  let text: string
  if (status === 'failed') {
    text = `Failed to apply changes [${stackNames}] with error \`${error}\``
    options.icon_emoji = ':fire:'
  } else if (status === 'applied') {
    text = `Changes [${stackNames}] applied`
    options.icon_emoji = ':rocket:'
  } else {
    text = `Pending changes [${stackNames}] detected`
    options.icon_emoji = ':hourglass:'
  }

  text += ` from job <${Deno.env.get('CI_JOB_URL')}|#${
    Deno.env.get('CI_JOB_ID')
  }>`
  text += '\nActions Below'

  options.attachments = [{
    text: await tfChangesSummary(changes, args, error, 'slack'),
  }]

  await slackMessage(
    Deno.env.get('SLACK_NOTIFICATION_CHANNEL'),
    text,
    await projectDeployThread(stackKey),
    false,
    options,
  )
}

export const slackMessage = async (
  channel: string | undefined,
  text: string,
  thread?: string,
  update = false,
  payload: any = {},
) => {
  payload.channel = channel
  payload.text = text

  let action: 'postMessage' | 'update' = 'postMessage'
  let ts = null
  const dailyChannelThread = thread
    ? `${thread}/${toId(channel || '')}-${dublinTimeNow().split(' ')[0]}`
    : null
  if (dailyChannelThread) {
    const info = await threadInfo(dailyChannelThread)
    if (info) {
      ts = info.ts
      if (ts) {
        if (update) {
          action = 'update'
          payload.ts = ts
          payload.channel = info.channel
        } else {
          payload.thread_ts = ts
        }
      }
    }
  }

  if (
    !channel || Deno.env.get('SLACK_BOT_TOKEN') === undefined ||
    Deno.env.get('SKIP_SLACK_NOTIFICATION') === 'true'
  ) {
    console.log(`SKIPPED SEND SLACK NOTIFICATION: ${JSON.stringify(payload)}`)
    return
  }

  const result: any = await slackApiMessage(action, payload)
  if (result.ok) {
    console.log(`SLACK message sent to ${channel}:\n ${text}`)
    if (!ts && dailyChannelThread) {
      threadCache[dailyChannelThread] = result
      await temporaryStorageSaveFile(
        dailyChannelThread,
        JSON.stringify(result),
      )
    }
  } else {
    console.warn('send slack message failed', result)
  }

  return result
}

const slackApiMessage = async (
  action: 'postMessage' | 'update',
  payload: any,
) => {
  debug('slack chat %s call %O', action, payload)
  const token = Deno.env.get('SLACK_BOT_TOKEN')
  if (!token) {
    debug('Slack bot token not found, skip')
    return
  }

  const url = `https://slack.com/api/chat.${action}`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  const responseData = await response.json()
  debug('slack chat %s response %O', action, responseData)
  return responseData
}
