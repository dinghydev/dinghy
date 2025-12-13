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
  client_list: resolvableValue(z.string().array()),
  gateway_arn: resolvableValue(z.string()),
  location_arn: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  audit_destination_arn: resolvableValue(z.string().optional()),
  bucket_region: resolvableValue(z.string().optional()),
  cache_attributes: resolvableValue(
    z.object({
      cache_stale_timeout_in_seconds: z.number().optional(),
    }).optional(),
  ),
  default_storage_class: resolvableValue(z.string().optional()),
  file_share_name: resolvableValue(z.string().optional()),
  guess_mime_type_enabled: resolvableValue(z.boolean().optional()),
  kms_encrypted: resolvableValue(z.boolean().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  nfs_file_share_defaults: resolvableValue(
    z.object({
      directory_mode: z.string().optional(),
      file_mode: z.string().optional(),
      group_id: z.string().optional(),
      owner_id: z.string().optional(),
    }).optional(),
  ),
  notification_policy: resolvableValue(z.string().optional()),
  object_acl: resolvableValue(z.string().optional()),
  read_only: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  requester_pays: resolvableValue(z.boolean().optional()),
  squash: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_endpoint_dns_name: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  fileshare_id: z.string().optional(),
  id: z.string().optional(),
  path: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/storagegateway_nfs_file_share

export function AwsStoragegatewayNfsFileShare(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_nfs_file_share'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayNfsFileShare = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(AwsStoragegatewayNfsFileShare, idFilter, baseNode)

export const useAwsStoragegatewayNfsFileShares = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsStoragegatewayNfsFileShare, idFilter, baseNode)
