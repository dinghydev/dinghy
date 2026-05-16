import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsIdentitystoreGroupsInputSchema = TfMetaSchema.extend({
  identity_store_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsIdentitystoreGroupsOutputSchema = z.object({
  groups: z.object({
    description: z.string(),
    display_name: z.string(),
    external_ids: z.object({
      id: z.string(),
      issuer: z.string(),
    }).array(),
    group_id: z.string(),
    identity_store_id: z.string(),
  }).array().optional(),
})

export type DataAwsIdentitystoreGroupsInputProps =
  & z.input<typeof DataAwsIdentitystoreGroupsInputSchema>
  & NodeProps

export type DataAwsIdentitystoreGroupsOutputProps =
  & z.output<typeof DataAwsIdentitystoreGroupsOutputSchema>
  & z.output<typeof DataAwsIdentitystoreGroupsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/identitystore_groups

export function DataAwsIdentitystoreGroups(
  props: Partial<DataAwsIdentitystoreGroupsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_identitystore_groups'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIdentitystoreGroupsInputSchema}
      _outputSchema={DataAwsIdentitystoreGroupsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIdentitystoreGroupss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIdentitystoreGroupsOutputProps>(
    DataAwsIdentitystoreGroups,
    idFilter,
    baseNode,
    optional,
  )
