import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsBedrockagentAgentVersionsInputSchema = TfMetaSchema.extend({
  agent_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsBedrockagentAgentVersionsOutputSchema = z.object({
  agent_version_summaries: z.object({
    agent_name: z.string().optional(),
    agent_status: z.string().optional(),
    agent_version: z.string().optional(),
    created_at: z.string().optional(),
    description: z.string().optional(),
    updated_at: z.string().optional(),
    guardrail_configuration: z.object({
      guardrail_identifier: z.string().optional(),
      guardrail_version: z.string().optional(),
    }).array().optional(),
  }).array().optional().optional(),
})

export type DataAwsBedrockagentAgentVersionsInputProps =
  & z.input<typeof DataAwsBedrockagentAgentVersionsInputSchema>
  & NodeProps

export type DataAwsBedrockagentAgentVersionsOutputProps =
  & z.output<typeof DataAwsBedrockagentAgentVersionsOutputSchema>
  & z.output<typeof DataAwsBedrockagentAgentVersionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/bedrockagent_agent_versions

export function DataAwsBedrockagentAgentVersions(
  props: Partial<DataAwsBedrockagentAgentVersionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_agent_versions'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsBedrockagentAgentVersionsInputSchema}
      _outputSchema={DataAwsBedrockagentAgentVersionsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsBedrockagentAgentVersionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsBedrockagentAgentVersionsOutputProps>(
    DataAwsBedrockagentAgentVersions,
    idFilter,
    baseNode,
    optional,
  )
