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

export const AwsApiGatewayDocumentationPartInputSchema = TfMetaSchema.extend({
  location: resolvableValue(z.object({
    method: z.string().optional(),
    name: z.string().optional(),
    path: z.string().optional(),
    status_code: z.string().optional(),
    type: z.string(),
  })),
  properties: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsApiGatewayDocumentationPartOutputSchema = z.object({
  documentation_part_id: z.string().optional(),
  id: z.string().optional(),
})

export type AwsApiGatewayDocumentationPartInputProps =
  & z.input<typeof AwsApiGatewayDocumentationPartInputSchema>
  & NodeProps

export type AwsApiGatewayDocumentationPartOutputProps =
  & z.output<typeof AwsApiGatewayDocumentationPartOutputSchema>
  & z.output<typeof AwsApiGatewayDocumentationPartInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_documentation_part

export function AwsApiGatewayDocumentationPart(
  props: Partial<AwsApiGatewayDocumentationPartInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_documentation_part'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayDocumentationPartInputSchema}
      _outputSchema={AwsApiGatewayDocumentationPartOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayDocumentationPart = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayDocumentationPartOutputProps>(
    AwsApiGatewayDocumentationPart,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayDocumentationParts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayDocumentationPartOutputProps>(
    AwsApiGatewayDocumentationPart,
    idFilter,
    baseNode,
    optional,
  )
