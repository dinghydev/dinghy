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

export const AwsBedrockagentAgentKnowledgeBaseAssociationInputSchema =
  TfMetaSchema.extend({
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

export const AwsBedrockagentAgentKnowledgeBaseAssociationOutputSchema = z
  .object({
    id: z.string().optional(),
  })

export type AwsBedrockagentAgentKnowledgeBaseAssociationInputProps =
  & z.input<typeof AwsBedrockagentAgentKnowledgeBaseAssociationInputSchema>
  & NodeProps

export type AwsBedrockagentAgentKnowledgeBaseAssociationOutputProps =
  & z.output<typeof AwsBedrockagentAgentKnowledgeBaseAssociationOutputSchema>
  & z.output<typeof AwsBedrockagentAgentKnowledgeBaseAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrockagent_agent_knowledge_base_association

export function AwsBedrockagentAgentKnowledgeBaseAssociation(
  props: Partial<AwsBedrockagentAgentKnowledgeBaseAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_agent_knowledge_base_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockagentAgentKnowledgeBaseAssociationInputSchema}
      _outputSchema={AwsBedrockagentAgentKnowledgeBaseAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentAgentKnowledgeBaseAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockagentAgentKnowledgeBaseAssociationOutputProps>(
    AwsBedrockagentAgentKnowledgeBaseAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentAgentKnowledgeBaseAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockagentAgentKnowledgeBaseAssociationOutputProps>(
    AwsBedrockagentAgentKnowledgeBaseAssociation,
    idFilter,
    baseNode,
    optional,
  )
