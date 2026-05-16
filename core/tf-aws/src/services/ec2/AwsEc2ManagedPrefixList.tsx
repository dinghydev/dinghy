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

export const AwsEc2ManagedPrefixListInputSchema = TfMetaSchema.extend({
  address_family: resolvableValue(z.string()),
  max_entries: resolvableValue(z.number()),
  name: resolvableValue(z.string()),
  entry: resolvableValue(
    z.object({
      cidr: z.string(),
      description: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsEc2ManagedPrefixListOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.number().optional(),
})

export type AwsEc2ManagedPrefixListInputProps =
  & z.input<typeof AwsEc2ManagedPrefixListInputSchema>
  & NodeProps

export type AwsEc2ManagedPrefixListOutputProps =
  & z.output<typeof AwsEc2ManagedPrefixListOutputSchema>
  & z.output<typeof AwsEc2ManagedPrefixListInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_managed_prefix_list

export function AwsEc2ManagedPrefixList(
  props: Partial<AwsEc2ManagedPrefixListInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_managed_prefix_list'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2ManagedPrefixListInputSchema}
      _outputSchema={AwsEc2ManagedPrefixListOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2ManagedPrefixList = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2ManagedPrefixListOutputProps>(
    AwsEc2ManagedPrefixList,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2ManagedPrefixLists = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2ManagedPrefixListOutputProps>(
    AwsEc2ManagedPrefixList,
    idFilter,
    baseNode,
    optional,
  )
