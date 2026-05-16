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

export const AwsApiGatewayResourceInputSchema = TfMetaSchema.extend({
  parent_id: resolvableValue(z.string()),
  path_part: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsApiGatewayResourceOutputSchema = z.object({
  id: z.string().optional(),
  path: z.string().optional(),
})

export const AwsApiGatewayResourceImportSchema = z.object({
  id: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsApiGatewayResourceInputProps =
  & z.input<typeof AwsApiGatewayResourceInputSchema>
  & z.input<typeof AwsApiGatewayResourceImportSchema>
  & NodeProps

export type AwsApiGatewayResourceOutputProps =
  & z.output<typeof AwsApiGatewayResourceOutputSchema>
  & z.output<typeof AwsApiGatewayResourceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_resource

export function AwsApiGatewayResource(
  props: Partial<AwsApiGatewayResourceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_resource'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayResourceInputSchema}
      _outputSchema={AwsApiGatewayResourceOutputSchema}
      _importSchema={AwsApiGatewayResourceImportSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayResource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayResourceOutputProps>(
    AwsApiGatewayResource,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayResources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayResourceOutputProps>(
    AwsApiGatewayResource,
    idFilter,
    baseNode,
    optional,
  )
