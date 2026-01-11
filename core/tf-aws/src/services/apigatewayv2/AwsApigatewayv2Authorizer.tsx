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
  api_id: resolvableValue(z.string()),
  authorizer_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  authorizer_credentials_arn: resolvableValue(z.string().optional()),
  authorizer_payload_format_version: resolvableValue(z.string().optional()),
  authorizer_result_ttl_in_seconds: resolvableValue(z.number().optional()),
  authorizer_uri: resolvableValue(z.string().optional()),
  enable_simple_responses: resolvableValue(z.boolean().optional()),
  identity_sources: resolvableValue(z.string().array().optional()),
  jwt_configuration: resolvableValue(
    z.object({
      audience: z.string().array().optional(),
      issuer: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apigatewayv2_authorizer

export function AwsApigatewayv2Authorizer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_authorizer'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2Authorizer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsApigatewayv2Authorizer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApigatewayv2Authorizers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsApigatewayv2Authorizer,
    idFilter,
    baseNode,
    optional,
  )
