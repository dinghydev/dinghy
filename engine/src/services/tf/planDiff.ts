import { hostAppHome } from '@dinghy/cli'
import { existsSync } from '@std/fs/exists'
import { Args } from '@std/cli/parse-args'

const DEFAULT_MAX_LINES_PER_STACK = 2000
const DEFAULT_MAX_TOTAL_BYTES = 200_000

const maxLinesPerStack = (): number =>
  Number(Deno.env.get('DINGHY_TF_PLAN_DIFF_MAX_LINES_PER_STACK')) ||
  DEFAULT_MAX_LINES_PER_STACK

const maxTotalBytes = (): number =>
  Number(Deno.env.get('DINGHY_TF_PLAN_DIFF_MAX_BYTES')) ||
  DEFAULT_MAX_TOTAL_BYTES

const truncateLines = (text: string, maxLines: number): string => {
  const lines = text.split(/\r?\n/)
  if (lines.length <= maxLines) return text
  return lines.slice(0, maxLines).join('\n') +
    `\n... [${lines.length - maxLines} more lines truncated]`
}

export const collectPlanDiff = (changes: any[], args: Args): string => {
  const linesPerStack = maxLinesPerStack()
  const totalBytesCap = maxTotalBytes()
  const sections: string[] = []
  let totalBytes = 0
  for (const stack of changes) {
    const planFile = `${
      args.output.startsWith('/')
        ? args.output
        : `${hostAppHome}/${args.output}`
    }/${stack.name}/tf.plan.txt`
    let body: string
    if (existsSync(planFile)) {
      body = truncateLines(
        Deno.readTextFileSync(planFile),
        linesPerStack,
      )
    } else {
      body = (stack.plan?.changes ?? []).join('\n')
    }
    const section = `<plan stack="${stack.name}" summary="${
      stack.plan?.summary ?? ''
    }">\n${body}\n</plan>`
    totalBytes += section.length
    if (totalBytes > totalBytesCap) {
      sections.push(
        `... [${
          changes.length - sections.length
        } stacks omitted, total payload exceeded ${totalBytesCap} bytes]`,
      )
      break
    }
    sections.push(section)
  }
  return sections.join('\n\n')
}
