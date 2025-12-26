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
  authorizer_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  protocol_type: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
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
  exception_level: resolvableValue(z.string().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  protocol_configuration: resolvableValue(
    z.object({
      mcp: z.object({
        instructions: z.string().optional(),
        search_type: z.string().optional(),
        supported_versions: z.string().array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
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
  gateway_arn: z.string().optional(),
  gateway_id: z.string().optional(),
  gateway_url: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagentcore_gateway

export function AwsBedrockagentcoreGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsBedrockagentcoreGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentcoreGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockagentcoreGateway,
    idFilter,
    baseNode,
    optional,
  )
