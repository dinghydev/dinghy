import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVerifiedpermissionsPolicyStore } from './AwsVerifiedpermissionsPolicyStore.tsx'

export const DataAwsVerifiedpermissionsPolicyStoreInputSchema = TfMetaSchema
  .extend({
    id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsVerifiedpermissionsPolicyStoreOutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  deletion_protection: z.string().optional(),
  description: z.string().optional(),
  last_updated_date: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  validation_settings: z.object({
    mode: z.string(),
  }).array().optional(),
})

export type DataAwsVerifiedpermissionsPolicyStoreInputProps =
  & z.input<typeof DataAwsVerifiedpermissionsPolicyStoreInputSchema>
  & NodeProps

export type DataAwsVerifiedpermissionsPolicyStoreOutputProps =
  & z.output<typeof DataAwsVerifiedpermissionsPolicyStoreOutputSchema>
  & z.output<typeof DataAwsVerifiedpermissionsPolicyStoreInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/verifiedpermissions_policy_store

export function DataAwsVerifiedpermissionsPolicyStore(
  props: Partial<DataAwsVerifiedpermissionsPolicyStoreInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVerifiedpermissionsPolicyStore
      _type='aws_verifiedpermissions_policy_store'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVerifiedpermissionsPolicyStoreInputSchema}
      _outputSchema={DataAwsVerifiedpermissionsPolicyStoreOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVerifiedpermissionsPolicyStore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsVerifiedpermissionsPolicyStoreOutputProps>(
    DataAwsVerifiedpermissionsPolicyStore,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsVerifiedpermissionsPolicyStores = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVerifiedpermissionsPolicyStoreOutputProps>(
    DataAwsVerifiedpermissionsPolicyStore,
    idFilter,
    baseNode,
    optional,
  )
