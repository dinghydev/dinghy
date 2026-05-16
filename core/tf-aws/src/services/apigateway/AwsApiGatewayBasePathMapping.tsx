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

export const AwsApiGatewayBasePathMappingInputSchema = TfMetaSchema.extend({
  api_id: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string()),
  base_path: resolvableValue(z.string().optional()),
  domain_name_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  stage_name: resolvableValue(z.string().optional()),
})

export const AwsApiGatewayBasePathMappingOutputSchema = z.object({})

export type AwsApiGatewayBasePathMappingInputProps =
  & z.input<typeof AwsApiGatewayBasePathMappingInputSchema>
  & NodeProps

export type AwsApiGatewayBasePathMappingOutputProps =
  & z.output<typeof AwsApiGatewayBasePathMappingOutputSchema>
  & z.output<typeof AwsApiGatewayBasePathMappingInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_base_path_mapping

export function AwsApiGatewayBasePathMapping(
  props: Partial<AwsApiGatewayBasePathMappingInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_base_path_mapping'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayBasePathMappingInputSchema}
      _outputSchema={AwsApiGatewayBasePathMappingOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayBasePathMapping = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayBasePathMappingOutputProps>(
    AwsApiGatewayBasePathMapping,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayBasePathMappings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayBasePathMappingOutputProps>(
    AwsApiGatewayBasePathMapping,
    idFilter,
    baseNode,
    optional,
  )
