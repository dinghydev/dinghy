import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagent_agent_knowledge_base_association

export const InputSchema = z.object({
  agent_id: resolvableValue(z.string()),
  description: resolvableValue(z.string()),
  knowledge_base_id: resolvableValue(z.string()),
  knowledge_base_state: resolvableValue(z.string()),
  agent_version: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockagentAgentKnowledgeBaseAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_agent_knowledge_base_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentAgentKnowledgeBaseAssociation = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsBedrockagentAgentKnowledgeBaseAssociation,
    node,
    id,
  )

export const useAwsBedrockagentAgentKnowledgeBaseAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockagentAgentKnowledgeBaseAssociation,
    node,
    id,
  )
