import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLbTrustStore } from './AwsLbTrustStore.tsx'

export const DataAwsLbTrustStoreInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsLbTrustStoreOutputSchema = z.object({})

export type DataAwsLbTrustStoreInputProps =
  & z.input<typeof DataAwsLbTrustStoreInputSchema>
  & NodeProps

export type DataAwsLbTrustStoreOutputProps =
  & z.output<typeof DataAwsLbTrustStoreOutputSchema>
  & z.output<typeof DataAwsLbTrustStoreInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/lb_trust_store

export function DataAwsLbTrustStore(
  props: Partial<DataAwsLbTrustStoreInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLbTrustStore
      _type='aws_lb_trust_store'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLbTrustStoreInputSchema}
      _outputSchema={DataAwsLbTrustStoreOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLbTrustStore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLbTrustStoreOutputProps>(
    DataAwsLbTrustStore,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLbTrustStores = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLbTrustStoreOutputProps>(
    DataAwsLbTrustStore,
    idFilter,
    baseNode,
    optional,
  )
