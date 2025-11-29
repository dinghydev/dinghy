import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsApiGatewayVpcLink } from './AwsApiGatewayVpcLink.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/api_gateway_vpc_link

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  description: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  target_arns: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsApiGatewayVpcLink(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsApiGatewayVpcLink
      _type='aws_api_gateway_vpc_link'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsApiGatewayVpcLink = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsApiGatewayVpcLink, node, id)

export const useDataAwsApiGatewayVpcLinks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsApiGatewayVpcLink, node, id)
