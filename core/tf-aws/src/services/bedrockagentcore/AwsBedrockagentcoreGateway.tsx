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

export const AwsBedrockagentcoreGatewayInputSchema = TfMetaSchema.extend({
  authorizer_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  protocol_type: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  authorizer_configuration: resolvableValue(
    z.object({
      custom_jwt_authorizer: z.object({
        allowed_audience: z.string().array().optional(),
        allowed_clients: z.string().array().optional(),
        allowed_scopes: z.string().array().optional(),
        discovery_url: z.string(),
        custom_claim: z.object({
          inbound_token_claim_name: z.string(),
          inbound_token_claim_value_type: z.string(),
          authorizing_claim_match_value: z.object({
            claim_match_operator: z.string(),
            claim_match_value: z.object({
              match_value_string: z.string().optional(),
              match_value_string_list: z.string().array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  exception_level: resolvableValue(z.string().optional()),
  interceptor_configuration: resolvableValue(
    z.object({
      interception_points: z.string().array(),
      input_configuration: z.object({
        pass_request_headers: z.boolean(),
      }).array().optional(),
      interceptor: z.object({
        lambda: z.object({
          arn: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
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
})

export const AwsBedrockagentcoreGatewayOutputSchema = z.object({
  gateway_arn: z.string().optional(),
  gateway_id: z.string().optional(),
  gateway_url: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  workload_identity_details: z.object({
    workload_identity_arn: z.string(),
  }).array().optional(),
})

export type AwsBedrockagentcoreGatewayInputProps =
  & z.input<typeof AwsBedrockagentcoreGatewayInputSchema>
  & NodeProps

export type AwsBedrockagentcoreGatewayOutputProps =
  & z.output<typeof AwsBedrockagentcoreGatewayOutputSchema>
  & z.output<typeof AwsBedrockagentcoreGatewayInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrockagentcore_gateway

export function AwsBedrockagentcoreGateway(
  props: Partial<AwsBedrockagentcoreGatewayInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockagentcoreGatewayInputSchema}
      _outputSchema={AwsBedrockagentcoreGatewayOutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockagentcoreGatewayOutputProps>(
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
  useTypedNodes<AwsBedrockagentcoreGatewayOutputProps>(
    AwsBedrockagentcoreGateway,
    idFilter,
    baseNode,
    optional,
  )
