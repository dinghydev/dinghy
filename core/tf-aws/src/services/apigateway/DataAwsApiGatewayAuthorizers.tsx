import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsApiGatewayAuthorizersInputSchema = TfMetaSchema.extend({
  rest_api_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsApiGatewayAuthorizersOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsApiGatewayAuthorizersInputProps =
  & z.input<typeof DataAwsApiGatewayAuthorizersInputSchema>
  & NodeProps

export type DataAwsApiGatewayAuthorizersOutputProps =
  & z.output<typeof DataAwsApiGatewayAuthorizersOutputSchema>
  & z.output<typeof DataAwsApiGatewayAuthorizersInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/api_gateway_authorizers

export function DataAwsApiGatewayAuthorizers(
  props: Partial<DataAwsApiGatewayAuthorizersInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_authorizers'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsApiGatewayAuthorizersInputSchema}
      _outputSchema={DataAwsApiGatewayAuthorizersOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsApiGatewayAuthorizerss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsApiGatewayAuthorizersOutputProps>(
    DataAwsApiGatewayAuthorizers,
    idFilter,
    baseNode,
    optional,
  )
