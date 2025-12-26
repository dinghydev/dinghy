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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kms_custom_key_store

export function AwsKmsCustomKeyStore(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_custom_key_store'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKmsCustomKeyStore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsKmsCustomKeyStore, idFilter, baseNode, optional)

export const useAwsKmsCustomKeyStores = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsKmsCustomKeyStore, idFilter, baseNode, optional)
