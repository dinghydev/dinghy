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

export const AwsApigatewayv2IntegrationResponseInputSchema = TfMetaSchema
  .extend({
    api_id: resolvableValue(z.string()),
    integration_id: resolvableValue(z.string()),
    integration_response_key: resolvableValue(z.string()),
    content_handling_strategy: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    response_templates: resolvableValue(
      z.record(z.string(), z.string()).optional(),
    ),
    template_selection_expression: resolvableValue(z.string().optional()),
  })

export const AwsApigatewayv2IntegrationResponseOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsApigatewayv2IntegrationResponseInputProps =
  & z.input<typeof AwsApigatewayv2IntegrationResponseInputSchema>
  & NodeProps

export type AwsApigatewayv2IntegrationResponseOutputProps =
  & z.output<typeof AwsApigatewayv2IntegrationResponseOutputSchema>
  & z.output<typeof AwsApigatewayv2IntegrationResponseInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apigatewayv2_integration_response

export function AwsApigatewayv2IntegrationResponse(
  props: Partial<AwsApigatewayv2IntegrationResponseInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_integration_response'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApigatewayv2IntegrationResponseInputSchema}
      _outputSchema={AwsApigatewayv2IntegrationResponseOutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2IntegrationResponse = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApigatewayv2IntegrationResponseOutputProps>(
    AwsApigatewayv2IntegrationResponse,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApigatewayv2IntegrationResponses = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApigatewayv2IntegrationResponseOutputProps>(
    AwsApigatewayv2IntegrationResponse,
    idFilter,
    baseNode,
    optional,
  )
