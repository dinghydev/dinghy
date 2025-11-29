import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/api_gateway_documentation_part

export const InputSchema = z.object({
  properties: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  location: resolvableValue(z.object({
    method: z.string().optional(),
    name: z.string().optional(),
    path: z.string().optional(),
    status_code: z.string().optional(),
    type: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
})

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

export function AwsApiGatewayDocumentationPart(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsApiGatewayDocumentationPart = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApiGatewayDocumentationPart, node, id)

export const useAwsApiGatewayDocumentationParts = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApiGatewayDocumentationPart, node, id)
