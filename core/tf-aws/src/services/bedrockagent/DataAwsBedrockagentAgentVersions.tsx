import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  agent_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  agent_version_summaries: z.object({
    agent_name: z.string(),
    agent_status: z.string(),
    agent_version: z.string(),
    created_at: z.string(),
    description: z.string(),
    updated_at: z.string(),
    guardrail_configuration: z.object({
      guardrail_identifier: z.string(),
      guardrail_version: z.string(),
    }).array().optional(),
  }).array().optional().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/bedrockagent_agent_versions

export function DataAwsBedrockagentAgentVersions(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_agent_versions'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsBedrockagentAgentVersionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsBedrockagentAgentVersions,
    idFilter,
    baseNode,
    optional,
  )
