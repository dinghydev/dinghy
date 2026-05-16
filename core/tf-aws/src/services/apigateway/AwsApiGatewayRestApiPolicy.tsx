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

export const AwsApiGatewayRestApiPolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsApiGatewayRestApiPolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsApiGatewayRestApiPolicyInputProps =
  & z.input<typeof AwsApiGatewayRestApiPolicyInputSchema>
  & NodeProps

export type AwsApiGatewayRestApiPolicyOutputProps =
  & z.output<typeof AwsApiGatewayRestApiPolicyOutputSchema>
  & z.output<typeof AwsApiGatewayRestApiPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_rest_api_policy

export function AwsApiGatewayRestApiPolicy(
  props: Partial<AwsApiGatewayRestApiPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_rest_api_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayRestApiPolicyInputSchema}
      _outputSchema={AwsApiGatewayRestApiPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayRestApiPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayRestApiPolicyOutputProps>(
    AwsApiGatewayRestApiPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayRestApiPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayRestApiPolicyOutputProps>(
    AwsApiGatewayRestApiPolicy,
    idFilter,
    baseNode,
    optional,
  )
