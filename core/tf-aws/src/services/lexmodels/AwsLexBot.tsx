import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  abort_statement: resolvableValue(z.object({
    response_card: z.string().optional(),
    message: z.object({
      content: z.string(),
      content_type: z.string(),
      group_number: z.number().optional(),
    }).array(),
  })),
  arn: resolvableValue(z.string()),
  child_directed: resolvableValue(z.boolean()),
  intent: resolvableValue(
    z.object({
      intent_name: z.string(),
      intent_version: z.string(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  clarification_prompt: resolvableValue(
    z.object({
      max_attempts: z.number(),
      response_card: z.string().optional(),
      message: z.object({
        content: z.string(),
        content_type: z.string(),
        group_number: z.number().optional(),
      }).array(),
    }).optional(),
  ),
  create_version: resolvableValue(z.boolean().optional()),
  description: resolvableValue(z.string().optional()),
  detect_sentiment: resolvableValue(z.boolean().optional()),
  enable_model_improvements: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  idle_session_ttl_in_seconds: resolvableValue(z.number().optional()),
  locale: resolvableValue(z.string().optional()),
  nlu_intent_confidence_threshold: resolvableValue(z.number().optional()),
  process_behavior: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  voice_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  checksum: z.string().optional(),
  created_date: z.string().optional(),
  failure_reason: z.string().optional(),
  last_updated_date: z.string().optional(),
  status: z.string().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lex_bot

export function AwsLexBot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lex_bot'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLexBot = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsLexBot, idFilter, baseNode)

export const useAwsLexBots = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsLexBot, idFilter, baseNode)
