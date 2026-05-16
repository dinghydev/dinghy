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

export const AwsApiGatewayModelInputSchema = TfMetaSchema.extend({
  content_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  schema: resolvableValue(z.string().optional()),
})

export const AwsApiGatewayModelOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsApiGatewayModelInputProps =
  & z.input<typeof AwsApiGatewayModelInputSchema>
  & NodeProps

export type AwsApiGatewayModelOutputProps =
  & z.output<typeof AwsApiGatewayModelOutputSchema>
  & z.output<typeof AwsApiGatewayModelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_model

export function AwsApiGatewayModel(
  props: Partial<AwsApiGatewayModelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_model'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayModelInputSchema}
      _outputSchema={AwsApiGatewayModelOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayModel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayModelOutputProps>(
    AwsApiGatewayModel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayModels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayModelOutputProps>(
    AwsApiGatewayModel,
    idFilter,
    baseNode,
    optional,
  )
