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
  gateway_arn: resolvableValue(z.string()),
  location_arn: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  access_based_enumeration: resolvableValue(z.boolean().optional()),
  admin_user_list: resolvableValue(z.string().array().optional()),
  audit_destination_arn: resolvableValue(z.string().optional()),
  authentication: resolvableValue(z.string().optional()),
  bucket_region: resolvableValue(z.string().optional()),
  cache_attributes: resolvableValue(
    z.object({
      cache_stale_timeout_in_seconds: z.number().optional(),
    }).optional(),
  ),
  case_sensitivity: resolvableValue(z.string().optional()),
  default_storage_class: resolvableValue(z.string().optional()),
  file_share_name: resolvableValue(z.string().optional()),
  guess_mime_type_enabled: resolvableValue(z.boolean().optional()),
  invalid_user_list: resolvableValue(z.string().array().optional()),
  kms_encrypted: resolvableValue(z.boolean().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  notification_policy: resolvableValue(z.string().optional()),
  object_acl: resolvableValue(z.string().optional()),
  oplocks_enabled: resolvableValue(z.boolean().optional()),
  read_only: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  requester_pays: resolvableValue(z.boolean().optional()),
  smb_acl_enabled: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  valid_user_list: resolvableValue(z.string().array().optional()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/storagegateway_smb_file_share

export function AwsStoragegatewaySmbFileShare(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_smb_file_share'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewaySmbFileShare = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsStoragegatewaySmbFileShare,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsStoragegatewaySmbFileShares = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsStoragegatewaySmbFileShare,
    idFilter,
    baseNode,
    optional,
  )
