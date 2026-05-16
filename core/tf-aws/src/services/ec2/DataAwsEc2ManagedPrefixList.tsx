import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2ManagedPrefixList } from './AwsEc2ManagedPrefixList.tsx'

export const DataAwsEc2ManagedPrefixListInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsEc2ManagedPrefixListOutputSchema = z.object({
  address_family: z.string().optional(),
  arn: z.string().optional(),
  entries: z.set(z.object({
    cidr: z.string(),
    description: z.string(),
  })).optional(),
  id: z.string().optional(),
  max_entries: z.number().optional(),
  name: z.string().optional(),
  owner_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  version: z.number().optional(),
})

export type DataAwsEc2ManagedPrefixListInputProps =
  & z.input<typeof DataAwsEc2ManagedPrefixListInputSchema>
  & NodeProps

export type DataAwsEc2ManagedPrefixListOutputProps =
  & z.output<typeof DataAwsEc2ManagedPrefixListOutputSchema>
  & z.output<typeof DataAwsEc2ManagedPrefixListInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_managed_prefix_list

export function DataAwsEc2ManagedPrefixList(
  props: Partial<DataAwsEc2ManagedPrefixListInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEc2ManagedPrefixList
      _type='aws_ec2_managed_prefix_list'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2ManagedPrefixListInputSchema}
      _outputSchema={DataAwsEc2ManagedPrefixListOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2ManagedPrefixList = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2ManagedPrefixListOutputProps>(
    DataAwsEc2ManagedPrefixList,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2ManagedPrefixLists = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2ManagedPrefixListOutputProps>(
    DataAwsEc2ManagedPrefixList,
    idFilter,
    baseNode,
    optional,
  )
