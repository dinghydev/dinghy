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

export const AwsApigatewayv2ModelInputSchema = TfMetaSchema.extend({
  api_id: resolvableValue(z.string()),
  content_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  schema: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsApigatewayv2ModelOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsApigatewayv2ModelInputProps =
  & z.input<typeof AwsApigatewayv2ModelInputSchema>
  & NodeProps

export type AwsApigatewayv2ModelOutputProps =
  & z.output<typeof AwsApigatewayv2ModelOutputSchema>
  & z.output<typeof AwsApigatewayv2ModelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apigatewayv2_model

export function AwsApigatewayv2Model(
  props: Partial<AwsApigatewayv2ModelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_model'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApigatewayv2ModelInputSchema}
      _outputSchema={AwsApigatewayv2ModelOutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2Model = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApigatewayv2ModelOutputProps>(
    AwsApigatewayv2Model,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApigatewayv2Models = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApigatewayv2ModelOutputProps>(
    AwsApigatewayv2Model,
    idFilter,
    baseNode,
    optional,
  )
