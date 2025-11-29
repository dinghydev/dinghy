import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2ManagedPrefixList } from './AwsEc2ManagedPrefixList.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ec2_managed_prefix_list

export const InputSchema = z.object({
  version: resolvableValue(z.number()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  address_family: z.string().optional(),
  arn: z.string().optional(),
  entries: z.object({
    cidr: z.string(),
    description: z.string(),
  }).array().optional(),
  id: z.string().optional(),
  max_entries: z.number().optional(),
  name: z.string().optional(),
  owner_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEc2ManagedPrefixList(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEc2ManagedPrefixList
      _type='aws_ec2_managed_prefix_list'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2ManagedPrefixList = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEc2ManagedPrefixList, node, id)

export const useDataAwsEc2ManagedPrefixLists = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEc2ManagedPrefixList, node, id)
