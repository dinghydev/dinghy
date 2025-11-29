import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/api_gateway_base_path_mapping

export const InputSchema = z.object({
  api_id: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string()),
  base_path: resolvableValue(z.string().optional()),
  domain_name_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  stage_name: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApiGatewayBasePathMapping(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_base_path_mapping'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayBasePathMapping = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApiGatewayBasePathMapping, node, id)

export const useAwsApiGatewayBasePathMappings = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApiGatewayBasePathMapping, node, id)
