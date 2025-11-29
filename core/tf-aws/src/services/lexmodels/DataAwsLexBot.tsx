import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLexBot } from './AwsLexBot.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lex_bot

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  checksum: z.string().optional(),
  child_directed: z.boolean().optional(),
  created_date: z.string().optional(),
  description: z.string().optional(),
  detect_sentiment: z.boolean().optional(),
  enable_model_improvements: z.boolean().optional(),
  failure_reason: z.string().optional(),
  idle_session_ttl_in_seconds: z.number().optional(),
  last_updated_date: z.string().optional(),
  locale: z.string().optional(),
  name: z.string().optional(),
  nlu_intent_confidence_threshold: z.number().optional(),
  status: z.string().optional(),
  version: z.string().optional(),
  voice_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLexBot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLexBot
      _type='aws_lex_bot'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLexBot = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLexBot, node, id)

export const useDataAwsLexBots = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLexBot, node, id)
