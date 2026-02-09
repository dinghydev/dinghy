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

export const InputSchema = TfMetaSchema.extend({
  custom_key_store_id: resolvableValue(z.string().optional()),
  custom_key_store_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  cloud_hsm_cluster_id: z.string().optional(),
  connection_state: z.string().optional(),
  creation_date: z.string().optional(),
  id: z.string().optional(),
  trust_anchor_certificate: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/kms_custom_key_store

export function DataAwsKmsCustomKeyStore(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsKmsCustomKeyStore
      _type='aws_kms_custom_key_store'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKmsCustomKeyStore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsKmsCustomKeyStore,
    idFilter,
    baseNode,
    optional,
  )
