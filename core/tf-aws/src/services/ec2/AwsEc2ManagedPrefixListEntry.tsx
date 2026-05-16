import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsEc2ManagedPrefixListEntryInputSchema = TfMetaSchema.extend({
  cidr: resolvableValue(z.string()),
  prefix_list_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEc2ManagedPrefixListEntryOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEc2ManagedPrefixListEntryInputProps =
  & z.input<typeof AwsEc2ManagedPrefixListEntryInputSchema>
  & NodeProps

export type AwsEc2ManagedPrefixListEntryOutputProps =
  & z.output<typeof AwsEc2ManagedPrefixListEntryOutputSchema>
  & z.output<typeof AwsEc2ManagedPrefixListEntryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_managed_prefix_list_entry

export function AwsEc2ManagedPrefixListEntry(
  props: Partial<AwsEc2ManagedPrefixListEntryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_managed_prefix_list_entry'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2ManagedPrefixListEntryInputSchema}
      _outputSchema={AwsEc2ManagedPrefixListEntryOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2ManagedPrefixListEntry = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2ManagedPrefixListEntryOutputProps>(
    AwsEc2ManagedPrefixListEntry,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2ManagedPrefixListEntrys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2ManagedPrefixListEntryOutputProps>(
    AwsEc2ManagedPrefixListEntry,
    idFilter,
    baseNode,
    optional,
  )
