import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKmsCustomKeyStore } from './AwsKmsCustomKeyStore.tsx'

export const DataAwsKmsCustomKeyStoreInputSchema = TfMetaSchema.extend({
  custom_key_store_id: resolvableValue(z.string().optional()),
  custom_key_store_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsKmsCustomKeyStoreOutputSchema = z.object({
  cloud_hsm_cluster_id: z.string().optional(),
  connection_state: z.string().optional(),
  creation_date: z.string().optional(),
  id: z.string().optional(),
  trust_anchor_certificate: z.string().optional(),
})

export type DataAwsKmsCustomKeyStoreInputProps =
  & z.input<typeof DataAwsKmsCustomKeyStoreInputSchema>
  & NodeProps

export type DataAwsKmsCustomKeyStoreOutputProps =
  & z.output<typeof DataAwsKmsCustomKeyStoreOutputSchema>
  & z.output<typeof DataAwsKmsCustomKeyStoreInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/kms_custom_key_store

export function DataAwsKmsCustomKeyStore(
  props: Partial<DataAwsKmsCustomKeyStoreInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsKmsCustomKeyStore
      _type='aws_kms_custom_key_store'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsKmsCustomKeyStoreInputSchema}
      _outputSchema={DataAwsKmsCustomKeyStoreOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKmsCustomKeyStore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsKmsCustomKeyStoreOutputProps>(
    DataAwsKmsCustomKeyStore,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsKmsCustomKeyStores = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsKmsCustomKeyStoreOutputProps>(
    DataAwsKmsCustomKeyStore,
    idFilter,
    baseNode,
    optional,
  )
