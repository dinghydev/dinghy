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

export const AwsApiGatewayRestApiPutInputSchema = TfMetaSchema.extend({
  body: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  fail_on_warnings: resolvableValue(z.boolean().optional()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
  triggers: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsApiGatewayRestApiPutOutputSchema = z.object({})

export type AwsApiGatewayRestApiPutInputProps =
  & z.input<typeof AwsApiGatewayRestApiPutInputSchema>
  & NodeProps

export type AwsApiGatewayRestApiPutOutputProps =
  & z.output<typeof AwsApiGatewayRestApiPutOutputSchema>
  & z.output<typeof AwsApiGatewayRestApiPutInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_rest_api_put

export function AwsApiGatewayRestApiPut(
  props: Partial<AwsApiGatewayRestApiPutInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_rest_api_put'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayRestApiPutInputSchema}
      _outputSchema={AwsApiGatewayRestApiPutOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayRestApiPut = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayRestApiPutOutputProps>(
    AwsApiGatewayRestApiPut,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayRestApiPuts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayRestApiPutOutputProps>(
    AwsApiGatewayRestApiPut,
    idFilter,
    baseNode,
    optional,
  )
