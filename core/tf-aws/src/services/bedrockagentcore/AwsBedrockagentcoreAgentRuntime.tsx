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
  agent_runtime_name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  agent_runtime_artifact: resolvableValue(
    z.object({
      code_configuration: z.object({
        entry_point: z.string().array(),
        runtime: z.string(),
        code: z.object({
          s3: z.object({
            bucket: z.string(),
            prefix: z.string(),
            version_id: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      container_configuration: z.object({
        container_uri: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  authorizer_configuration: resolvableValue(
    z.object({
      custom_jwt_authorizer: z.object({
        allowed_audience: z.string().array().optional(),
        allowed_clients: z.string().array().optional(),
        discovery_url: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  environment_variables: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  lifecycle_configuration: resolvableValue(
    z.object({
      idle_runtime_session_timeout: z.number(),
      max_lifetime: z.number(),
    }).array().optional(),
  ),
  network_configuration: resolvableValue(
    z.object({
      network_mode: z.string(),
      network_mode_config: z.object({
        security_groups: z.string().array(),
        subnets: z.string().array(),
      }).array().optional(),
    }).array().optional(),
  ),
  protocol_configuration: resolvableValue(
    z.object({
      server_protocol: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  request_header_configuration: resolvableValue(
    z.object({
      request_header_allowlist: z.string().array().optional(),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  agent_runtime_arn: z.string().optional(),
  agent_runtime_id: z.string().optional(),
  agent_runtime_version: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  workload_identity_details: z.object({
    workload_identity_arn: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagentcore_agent_runtime

export function AwsBedrockagentcoreAgentRuntime(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_agent_runtime'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreAgentRuntime = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsBedrockagentcoreAgentRuntime,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentcoreAgentRuntimes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockagentcoreAgentRuntime,
    idFilter,
    baseNode,
    optional,
  )
