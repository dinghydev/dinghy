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

export const InputSchema = TfMetaSchema.extend({
  file_cache_type: resolvableValue(z.string()),
  file_cache_type_version: resolvableValue(z.string()),
  storage_capacity: resolvableValue(z.number()),
  subnet_ids: resolvableValue(z.string().array()),
  copy_tags_to_data_repository_associations: resolvableValue(
    z.boolean().optional(),
  ),
  data_repository_association: resolvableValue(
    z.object({
      association_id: z.string().optional(),
      data_repository_path: z.string(),
      data_repository_subdirectories: z.string().array().optional(),
      file_cache_id: z.string().optional(),
      file_cache_path: z.string(),
      file_system_id: z.string().optional(),
      file_system_path: z.string().optional(),
      imported_file_chunk_size: z.number().optional(),
      resource_arn: z.string().optional(),
      tags: z.record(z.string(), z.string()).optional(),
      nfs: z.object({
        dns_ips: z.string().array().optional(),
        version: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  kms_key_id: resolvableValue(z.string().optional()),
  lustre_configuration: resolvableValue(
    z.object({
      deployment_type: z.string(),
      log_configuration: z.object({
        destination: z.string(),
        level: z.string(),
      }).array().optional(),
      mount_name: z.string().optional(),
      per_unit_storage_throughput: z.number(),
      weekly_maintenance_start_time: z.string().optional(),
      metadata_configuration: z.object({
        storage_capacity: z.number(),
      }).array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  data_repository_association_ids: z.set(z.string()).optional(),
  dns_name: z.string().optional(),
  file_cache_id: z.string().optional(),
  id: z.string().optional(),
  network_interface_ids: z.set(z.string()).optional(),
  owner_id: z.string().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/fsx_file_cache

export function AwsFsxFileCache(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_file_cache'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFsxFileCache = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsFsxFileCache, idFilter, baseNode, optional)

export const useAwsFsxFileCaches = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsFsxFileCache, idFilter, baseNode, optional)
