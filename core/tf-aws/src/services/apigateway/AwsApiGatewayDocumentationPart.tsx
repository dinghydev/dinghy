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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  documentation_part_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/api_gateway_documentation_part

export function AwsApiGatewayDocumentationPart(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_documentation_part'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayDocumentationPart = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsApiGatewayDocumentationPart,
    idFilter,
    baseNode,
    optional,
  )
