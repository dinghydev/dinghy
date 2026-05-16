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

export const AwsBedrockagentcoreAgentRuntimeEndpointInputSchema = TfMetaSchema
  .extend({
    agent_runtime_id: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    agent_runtime_version: resolvableValue(z.string().optional()),
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

export const AwsBedrockagentcoreAgentRuntimeEndpointOutputSchema = z.object({
  agent_runtime_arn: z.string().optional(),
  agent_runtime_endpoint_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsBedrockagentcoreAgentRuntimeEndpointInputProps =
  & z.input<typeof AwsBedrockagentcoreAgentRuntimeEndpointInputSchema>
  & NodeProps

export type AwsBedrockagentcoreAgentRuntimeEndpointOutputProps =
  & z.output<typeof AwsBedrockagentcoreAgentRuntimeEndpointOutputSchema>
  & z.output<typeof AwsBedrockagentcoreAgentRuntimeEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrockagentcore_agent_runtime_endpoint

export function AwsBedrockagentcoreAgentRuntimeEndpoint(
  props: Partial<AwsBedrockagentcoreAgentRuntimeEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_agent_runtime_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockagentcoreAgentRuntimeEndpointInputSchema}
      _outputSchema={AwsBedrockagentcoreAgentRuntimeEndpointOutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreAgentRuntimeEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockagentcoreAgentRuntimeEndpointOutputProps>(
    AwsBedrockagentcoreAgentRuntimeEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentcoreAgentRuntimeEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockagentcoreAgentRuntimeEndpointOutputProps>(
    AwsBedrockagentcoreAgentRuntimeEndpoint,
    idFilter,
    baseNode,
    optional,
  )
