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

export const AwsKmsCustomKeyStoreInputSchema = TfMetaSchema.extend({
  custom_key_store_name: resolvableValue(z.string()),
  cloud_hsm_cluster_id: resolvableValue(z.string().optional()),
  custom_key_store_type: resolvableValue(z.string().optional()),
  key_store_password: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  trust_anchor_certificate: resolvableValue(z.string().optional()),
  xks_proxy_authentication_credential: resolvableValue(
    z.object({
      access_key_id: z.string(),
      raw_secret_access_key: z.string(),
    }).optional(),
  ),
  xks_proxy_connectivity: resolvableValue(z.string().optional()),
  xks_proxy_uri_endpoint: resolvableValue(z.string().optional()),
  xks_proxy_uri_path: resolvableValue(z.string().optional()),
  xks_proxy_vpc_endpoint_service_name: resolvableValue(z.string().optional()),
})

export const AwsKmsCustomKeyStoreOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsKmsCustomKeyStoreInputProps =
  & z.input<typeof AwsKmsCustomKeyStoreInputSchema>
  & NodeProps

export type AwsKmsCustomKeyStoreOutputProps =
  & z.output<typeof AwsKmsCustomKeyStoreOutputSchema>
  & z.output<typeof AwsKmsCustomKeyStoreInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/kms_custom_key_store

export function AwsKmsCustomKeyStore(
  props: Partial<AwsKmsCustomKeyStoreInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_custom_key_store'
      _category='resource'
      _title={_title}
      _inputSchema={AwsKmsCustomKeyStoreInputSchema}
      _outputSchema={AwsKmsCustomKeyStoreOutputSchema}
      {...props}
    />
  )
}

export const useAwsKmsCustomKeyStore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsKmsCustomKeyStoreOutputProps>(
    AwsKmsCustomKeyStore,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsKmsCustomKeyStores = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsKmsCustomKeyStoreOutputProps>(
    AwsKmsCustomKeyStore,
    idFilter,
    baseNode,
    optional,
  )
