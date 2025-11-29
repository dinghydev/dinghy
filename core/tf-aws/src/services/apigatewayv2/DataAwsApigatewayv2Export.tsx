import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/apigatewayv2_export

export const InputSchema = z.object({
  api_id: resolvableValue(z.string()),
  output_type: resolvableValue(z.string()),
  specification: resolvableValue(z.string()),
  export_version: resolvableValue(z.string().optional()),
  include_extensions: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  stage_name: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  body: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsApigatewayv2Export(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_export'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsApigatewayv2Export = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsApigatewayv2Export, node, id)

export const useDataAwsApigatewayv2Exports = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsApigatewayv2Export, node, id)
