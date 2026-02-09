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

export const InputSchema = TfMetaSchema.extend({
  agent_id: resolvableValue(z.string()),
  collaboration_instruction: resolvableValue(z.string()),
  collaborator_name: resolvableValue(z.string()),
  agent_descriptor: resolvableValue(
    z.object({
      alias_arn: z.string(),
    }).array().optional(),
  ),
  agent_version: resolvableValue(z.string().optional()),
  prepare_agent: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  relay_conversation_history: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  collaborator_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrockagent_agent_collaborator

export function AwsBedrockagentAgentCollaborator(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_agent_collaborator'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentAgentCollaborator = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsBedrockagentAgentCollaborator,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentAgentCollaborators = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockagentAgentCollaborator,
    idFilter,
    baseNode,
    optional,
  )
