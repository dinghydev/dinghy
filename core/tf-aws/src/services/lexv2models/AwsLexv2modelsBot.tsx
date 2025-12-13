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
  arn: resolvableValue(z.string()),
  idle_session_ttl_in_seconds: resolvableValue(z.number()),
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  data_privacy: resolvableValue(
    z.object({
      child_directed: z.boolean(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  members: resolvableValue(
    z.object({
      alias_id: z.string(),
      alias_name: z.string(),
      id: z.string(),
      name: z.string(),
      version: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  test_bot_alias_tags: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lexv2models_bot

export function AwsLexv2modelsBot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lexv2models_bot'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLexv2modelsBot = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsLexv2modelsBot, idFilter, baseNode)

export const useAwsLexv2modelsBots = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsLexv2modelsBot, idFilter, baseNode)
