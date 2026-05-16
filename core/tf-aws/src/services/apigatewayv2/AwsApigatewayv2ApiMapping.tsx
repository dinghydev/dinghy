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

export const AwsApigatewayv2ApiMappingInputSchema = TfMetaSchema.extend({
  api_id: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string()),
  stage: resolvableValue(z.string()),
  api_mapping_key: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsApigatewayv2ApiMappingOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsApigatewayv2ApiMappingInputProps =
  & z.input<typeof AwsApigatewayv2ApiMappingInputSchema>
  & NodeProps

export type AwsApigatewayv2ApiMappingOutputProps =
  & z.output<typeof AwsApigatewayv2ApiMappingOutputSchema>
  & z.output<typeof AwsApigatewayv2ApiMappingInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apigatewayv2_api_mapping

export function AwsApigatewayv2ApiMapping(
  props: Partial<AwsApigatewayv2ApiMappingInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_api_mapping'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApigatewayv2ApiMappingInputSchema}
      _outputSchema={AwsApigatewayv2ApiMappingOutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2ApiMapping = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApigatewayv2ApiMappingOutputProps>(
    AwsApigatewayv2ApiMapping,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApigatewayv2ApiMappings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApigatewayv2ApiMappingOutputProps>(
    AwsApigatewayv2ApiMapping,
    idFilter,
    baseNode,
    optional,
  )
