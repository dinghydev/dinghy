import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIdentitystoreGroup } from './AwsIdentitystoreGroup.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/identitystore_group

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  description: z.string().optional(),
  display_name: z.string().optional(),
  external_ids: z.object({
    id: z.string(),
    issuer: z.string(),
  }).array().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsIdentitystoreGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsIdentitystoreGroup
      _type='aws_identitystore_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIdentitystoreGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsIdentitystoreGroup, node, id)

export const useDataAwsIdentitystoreGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsIdentitystoreGroup, node, id)
