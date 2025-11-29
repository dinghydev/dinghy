import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagentcore_gateway_target

export const InputSchema = z.object({
  gateway_identifier: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  credential_provider_configuration: resolvableValue(
    z.object({
      api_key: z.object({
        credential_location: z.string().optional(),
        credential_parameter_name: z.string().optional(),
        credential_prefix: z.string().optional(),
        provider_arn: z.string(),
      }).optional(),
      gateway_iam_role: z.object({}),
      oauth: z.object({
        custom_parameters: z.record(z.string(), z.string()).optional(),
        provider_arn: z.string(),
        scopes: z.string().array(),
      }).optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  target_configuration: resolvableValue(
    z.object({
      mcp: z.object({
        lambda: z.object({
          lambda_arn: z.string(),
        }).optional(),
        mcp_server: z.object({
          endpoint: z.string(),
        }).optional(),
        open_api_schema: z.object({
          inline_payload: z.object({
            payload: z.string(),
          }).optional(),
          s3: z.object({
            bucket_owner_account_id: z.string().optional(),
            uri: z.string().optional(),
          }).optional(),
        }).optional(),
        smithy_model: z.object({
          inline_payload: z.object({
            payload: z.string(),
          }).optional(),
          s3: z.object({
            bucket_owner_account_id: z.string().optional(),
            uri: z.string().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  target_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockagentcoreGatewayTarget(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_gateway_target'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreGatewayTarget = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBedrockagentcoreGatewayTarget, node, id)

export const useAwsBedrockagentcoreGatewayTargets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBedrockagentcoreGatewayTarget, node, id)
