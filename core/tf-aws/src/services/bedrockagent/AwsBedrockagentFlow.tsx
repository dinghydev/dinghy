import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagent_flow

export const InputSchema = z.object({
  execution_role_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  customer_encryption_key_arn: resolvableValue(z.string().optional()),
  definition: resolvableValue(
    z.object({
      connection: z.object({
        name: z.string(),
        source: z.string(),
        target: z.string(),
        type: z.string(),
      }).optional(),
      node: z.object({
        name: z.string(),
        type: z.string(),
      }).optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockagentFlow(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_flow'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentFlow = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBedrockagentFlow, node, id)

export const useAwsBedrockagentFlows = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBedrockagentFlow, node, id)
