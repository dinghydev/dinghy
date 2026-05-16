import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2ManagedPrefixListsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsEc2ManagedPrefixListsOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsEc2ManagedPrefixListsInputProps =
  & z.input<typeof DataAwsEc2ManagedPrefixListsInputSchema>
  & NodeProps

export type DataAwsEc2ManagedPrefixListsOutputProps =
  & z.output<typeof DataAwsEc2ManagedPrefixListsOutputSchema>
  & z.output<typeof DataAwsEc2ManagedPrefixListsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_managed_prefix_lists

export function DataAwsEc2ManagedPrefixLists(
  props: Partial<DataAwsEc2ManagedPrefixListsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_managed_prefix_lists'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2ManagedPrefixListsInputSchema}
      _outputSchema={DataAwsEc2ManagedPrefixListsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2ManagedPrefixListss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2ManagedPrefixListsOutputProps>(
    DataAwsEc2ManagedPrefixLists,
    idFilter,
    baseNode,
    optional,
  )
