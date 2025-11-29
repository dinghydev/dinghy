import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsApigatewayv2VpcLink } from './AwsApigatewayv2VpcLink.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/apigatewayv2_vpc_link

export const InputSchema = z.object({
  vpc_link_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  security_group_ids: z.string().array().optional(),
  subnet_ids: z.string().array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsApigatewayv2VpcLink(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsApigatewayv2VpcLink
      _type='aws_apigatewayv2_vpc_link'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsApigatewayv2VpcLink = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsApigatewayv2VpcLink, node, id)

export const useDataAwsApigatewayv2VpcLinks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsApigatewayv2VpcLink, node, id)
