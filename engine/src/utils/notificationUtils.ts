import { jobName, projectDeployThread, projectName } from './gitUtils.ts'
import Debug from 'debug'
import { temporaryStorageGetFile, temporaryStorageSaveFile } from './s3.ts'
import { dublinTimeNow } from './timeUtils.ts'
const debug = Debug('notificationUtils')

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

export const notifyChanges = async (changes: any[], error?: string) => {
  const options: any = {}
  options.username = `${await projectName()} ${jobName()}`
  let text: string
  const changedStages = changes.map((s) => s.id).join('|')
  if (error) {
    text = `Failed to apply changes [${changedStages}] with error \`${error}\``
    options.icon_emoji = ':fire:'
  } else if (jobName().includes('apply') || jobName().includes('up')) {
    text = `Changes [${changedStages}] applied`
    options.icon_emoji = ':rocket:'
  } else {
    text = `Pending changes [${changedStages}] detected`
    options.icon_emoji = ':hourglass:'
  }

  text += ` from job <${Deno.env.get('CI_JOB_URL')}|#${
    Deno.env.get('CI_JOB_ID')
  }>`
  text += '\nActions Below'

  const lines: string[] = []
  for (const stageChange of changes) {
    lines.push(
      `${(stageChange as any).id}: ${(stageChange as any).plan.summary}`,
      '```',
      ...(stageChange as any).plan.changes,
      '```',
    )
  }

  options.attachments = [{
    text: lines.join('\n'),
  }]

  await slackMessage(
    Deno.env.get('SLACK_NOTIFICATION_CHANNEL'),
    text,
    await projectDeployThread(),
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
    ? `${thread}/${channel}-${dublinTimeNow().split(' ')[0]}`
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
