import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagent_knowledge_base

export const InputSchema = z.object({
  failure_reasons: resolvableValue(z.string().array()),
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  knowledge_base_configuration: resolvableValue(
    z.object({
      type: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  storage_configuration: resolvableValue(
    z.object({
      type: z.string(),
    }).optional(),
  ),
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
  tags_all: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockagentKnowledgeBase(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_knowledge_base'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentKnowledgeBase = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBedrockagentKnowledgeBase, node, id)

export const useAwsBedrockagentKnowledgeBases = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBedrockagentKnowledgeBase, node, id)
