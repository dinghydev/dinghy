import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOpensearchserverlessVpcEndpoint } from './AwsOpensearchserverlessVpcEndpoint.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/opensearchserverless_vpc_endpoint

export const InputSchema = z.object({
  vpc_endpoint_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  created_date: z.string().optional(),
  name: z.string().optional(),
  security_group_ids: z.string().array().optional(),
  subnet_ids: z.string().array().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOpensearchserverlessVpcEndpoint(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsOpensearchserverlessVpcEndpoint
      _type='aws_opensearchserverless_vpc_endpoint'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchserverlessVpcEndpoint = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsOpensearchserverlessVpcEndpoint, node, id)

export const useDataAwsOpensearchserverlessVpcEndpoints = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(DataAwsOpensearchserverlessVpcEndpoint, node, id)
