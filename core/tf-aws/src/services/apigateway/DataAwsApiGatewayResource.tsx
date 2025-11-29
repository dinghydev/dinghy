import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsApiGatewayResource } from './AwsApiGatewayResource.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/api_gateway_resource

export const InputSchema = z.object({
  path: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  parent_id: z.string().optional(),
  path_part: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsApiGatewayResource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsApiGatewayResource
      _type='aws_api_gateway_resource'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsApiGatewayResource = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsApiGatewayResource, node, id)

export const useDataAwsApiGatewayResources = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsApiGatewayResource, node, id)
