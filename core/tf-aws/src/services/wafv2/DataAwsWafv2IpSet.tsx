import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafv2IpSet } from './AwsWafv2IpSet.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/wafv2_ip_set

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  scope: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  addresses: z.string().array().optional(),
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  ip_address_version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsWafv2IpSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsWafv2IpSet
      _type='aws_wafv2_ip_set'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafv2IpSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsWafv2IpSet, node, id)

export const useDataAwsWafv2IpSets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsWafv2IpSet, node, id)
