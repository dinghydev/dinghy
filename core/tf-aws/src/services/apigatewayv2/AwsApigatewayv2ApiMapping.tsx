import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/apigatewayv2_api_mapping

export const InputSchema = z.object({
  api_id: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string()),
  stage: resolvableValue(z.string()),
  api_mapping_key: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApigatewayv2ApiMapping(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_api_mapping'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2ApiMapping = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApigatewayv2ApiMapping, node, id)

export const useAwsApigatewayv2ApiMappings = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApigatewayv2ApiMapping, node, id)
