import { Args } from '@std/cli/parse-args'
import {
  AgenticSummaryFormat,
  generateAgenticSummary,
} from './tfChangesAgenticSummary.ts'

export type { AgenticSummaryFormat }

const fallbackBody = (changes: any[]): string => {
  const lines: string[] = []
  for (const stackChange of changes) {
    lines.push(
      `${stackChange.name}: ${stackChange.plan.summary}`,
      '```',
      ...stackChange.plan.changes,
      '```',
    )
  }
  return lines.join('\n')
}

export const tfChangesSummary = async (
  changes: any[],
  args: Args | undefined,
  error: string | undefined,
  format: AgenticSummaryFormat,
): Promise<string> => {
  const agentic = await generateAgenticSummary(changes, args, error, format)
  return agentic ?? fallbackBody(changes)
}
