import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsBedrockagentAgentAliasInputSchema = TfMetaSchema.extend({
  agent_alias_name: resolvableValue(z.string()),
  agent_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  routing_configuration: resolvableValue(
    z.object({
      agent_version: z.string(),
      provisioned_throughput: z.string(),
    }).array().optional(),
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

export const AwsBedrockagentAgentAliasOutputSchema = z.object({
  agent_alias_arn: z.string().optional(),
  agent_alias_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsBedrockagentAgentAliasInputProps =
  & z.input<typeof AwsBedrockagentAgentAliasInputSchema>
  & NodeProps

export type AwsBedrockagentAgentAliasOutputProps =
  & z.output<typeof AwsBedrockagentAgentAliasOutputSchema>
  & z.output<typeof AwsBedrockagentAgentAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrockagent_agent_alias

export function AwsBedrockagentAgentAlias(
  props: Partial<AwsBedrockagentAgentAliasInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_agent_alias'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockagentAgentAliasInputSchema}
      _outputSchema={AwsBedrockagentAgentAliasOutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentAgentAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockagentAgentAliasOutputProps>(
    AwsBedrockagentAgentAlias,
    idFilter,
    baseNode,
    optional,
  )
