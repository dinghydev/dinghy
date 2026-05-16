import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIdentitystoreGroup } from './AwsIdentitystoreGroup.tsx'

export const DataAwsIdentitystoreGroupInputSchema = TfMetaSchema.extend({
  identity_store_id: resolvableValue(z.string()),
  alternate_identifier: resolvableValue(
    z.object({
      external_id: z.object({
        id: z.string(),
        issuer: z.string(),
      }).optional(),
      unique_attribute: z.object({
        attribute_path: z.string(),
        attribute_value: z.string(),
      }).optional(),
    }).optional(),
  ),
  group_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsIdentitystoreGroupOutputSchema = z.object({
  description: z.string().optional(),
  display_name: z.string().optional(),
  external_ids: z.object({
    id: z.string(),
    issuer: z.string(),
  }).array().optional(),
  id: z.string().optional(),
})

export type DataAwsIdentitystoreGroupInputProps =
  & z.input<typeof DataAwsIdentitystoreGroupInputSchema>
  & NodeProps

export type DataAwsIdentitystoreGroupOutputProps =
  & z.output<typeof DataAwsIdentitystoreGroupOutputSchema>
  & z.output<typeof DataAwsIdentitystoreGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/identitystore_group

export function DataAwsIdentitystoreGroup(
  props: Partial<DataAwsIdentitystoreGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsIdentitystoreGroup
      _type='aws_identitystore_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIdentitystoreGroupInputSchema}
      _outputSchema={DataAwsIdentitystoreGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIdentitystoreGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsIdentitystoreGroupOutputProps>(
    DataAwsIdentitystoreGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIdentitystoreGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIdentitystoreGroupOutputProps>(
    DataAwsIdentitystoreGroup,
    idFilter,
    baseNode,
    optional,
  )
