import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/fsx_file_cache

export const InputSchema = z.object({
  file_cache_type: resolvableValue(z.string()),
  file_cache_type_version: resolvableValue(z.string()),
  owner_id: resolvableValue(z.string()),
  storage_capacity: resolvableValue(z.number()),
  subnet_ids: resolvableValue(z.string().array()),
  copy_tags_to_data_repository_associations: resolvableValue(
    z.boolean().optional(),
  ),
  data_repository_association: resolvableValue(
    z.object({
      association_id: z.string(),
      data_repository_path: z.string(),
      data_repository_subdirectories: z.string().array().optional(),
      file_cache_id: z.string(),
      file_cache_path: z.string(),
      file_system_id: z.string(),
      file_system_path: z.string(),
      imported_file_chunk_size: z.number(),
      resource_arn: z.string(),
      tags: z.record(z.string(), z.string()).optional(),
    }).array().optional(),
  ),
  kms_key_id: resolvableValue(z.string().optional()),
  lustre_configuration: resolvableValue(
    z.object({
      deployment_type: z.string(),
      log_configuration: z.object({
        destination: z.string(),
        level: z.string(),
      }).array(),
      mount_name: z.string(),
      per_unit_storage_throughput: z.number(),
      weekly_maintenance_start_time: z.string().optional(),
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
  data_repository_association_ids: z.string().array().optional(),
  dns_name: z.string().optional(),
  file_cache_id: z.string().optional(),
  id: z.string().optional(),
  network_interface_ids: z.string().array().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsFsxFileCache(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsFsxFileCache = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsFsxFileCache, node, id)

export const useAwsFsxFileCaches = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsFsxFileCache, node, id)
