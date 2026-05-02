import { hostAppHome } from '@dinghy/cli'
import { existsSync } from '@std/fs/exists'
import { Args } from '@std/cli/parse-args'
import { z } from 'zod'
import Debug from 'debug'
import { chat } from '../llm/chat.ts'
import { resolveModelId } from '../llm/resolveModel.ts'
import { collectGitDiff } from '../git/gitDiff.ts'
import { collectPlanDiff } from './planDiff.ts'

const debug = Debug('tfChangesAgenticSummary')

const PROMPT_FILE_REL = '.dinghy/notify-changes-prompt.md'

const DEFAULT_PROMPT =
  `You are summarising a Terraform deployment for engineers reviewing the change.

Given the git diff of the last commit and the per-stack terraform plan output,
produce a concise structured summary:

- focus on the infrastucture change
- don't need sumary git change unless it's helpful understand the infrastructure change
- flag anything risky: destroys, IAM, networking, data
- skip filler and obvious commentary
- if an error is provided, lead with the failure cause`

const SUMMARY_SCHEMA = z.object({
  summary: z.string().describe(
    '1-5 sentences describing what changed at code-level intent. No filler, no obvious commentary.',
  ),
  risks: z.array(z.string()).describe(
    'Risky changes flagged (destroys, IAM, networking, data). Empty array if none.',
  ),
  failureCause: z.string().optional().describe(
    'Lead with this if an error was provided. Omit otherwise.',
  ),
})

const renderSlack = (s: z.infer<typeof SUMMARY_SCHEMA>): string => {
  const lines: string[] = []
  if (s.failureCause) lines.push(s.failureCause)
  lines.push(s.summary)
  if (s.risks.length) {
    lines.push(`Risks:\n${s.risks.map((r) => `• ${r}`).join('\n')}`)
  }
  return lines.join('\n').trim()
}

const renderMarkdown = (s: z.infer<typeof SUMMARY_SCHEMA>): string => {
  const lines: string[] = []
  if (s.failureCause) lines.push(`**Failure:** ${s.failureCause}`)
  lines.push(s.summary)
  if (s.risks.length) {
    lines.push(
      `**Risks**\n${s.risks.map((r) => `- ${r}`).join('\n')}`,
    )
  }
  return lines.join('\n\n').trim()
}

export type AgenticSummaryFormat = 'slack' | 'markdown'

const resolvePrompt = (): string => {
  const path = `${hostAppHome}/${PROMPT_FILE_REL}`
  if (existsSync(path)) return Deno.readTextFileSync(path)
  return DEFAULT_PROMPT
}

export const generateAgenticSummary = async (
  changes: any[],
  args: Args | undefined,
  error: string | undefined,
  format: AgenticSummaryFormat,
): Promise<string | null> => {
  if (!resolveModelId()) return null
  if (!args) {
    debug('no args available, skip agentic summary')
    return null
  }

  try {
    const systemPrompt = resolvePrompt()
    const gitDiff = await collectGitDiff()
    const planDiff = collectPlanDiff(changes, args)
    const userParts: string[] = []
    if (error) userParts.push(`<error>\n${error}\n</error>`)
    userParts.push(`<git-diff>\n${gitDiff}\n</git-diff>`)
    userParts.push(`<terraform-plans>\n${planDiff}\n</terraform-plans>`)

    const parsed = await chat({
      systemPrompt,
      userPrompt: userParts.join('\n\n'),
      outputSchema: SUMMARY_SCHEMA,
    })
    const text = format === 'markdown'
      ? renderMarkdown(parsed)
      : renderSlack(parsed)
    return text.length ? text : null
  } catch (err) {
    debug('agentic summary failed, falling back: %O', err)
    return null
  }
}
