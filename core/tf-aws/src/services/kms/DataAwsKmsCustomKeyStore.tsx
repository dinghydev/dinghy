import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKmsCustomKeyStore } from './AwsKmsCustomKeyStore.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/kms_custom_key_store

export const InputSchema = z.object({
  cloud_hsm_cluster_id: resolvableValue(z.string()),
  custom_key_store_id: resolvableValue(z.string().optional()),
  custom_key_store_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
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

export function DataAwsKmsCustomKeyStore(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useDataAwsKmsCustomKeyStore = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsKmsCustomKeyStore, node, id)

export const useDataAwsKmsCustomKeyStores = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsKmsCustomKeyStore, node, id)
