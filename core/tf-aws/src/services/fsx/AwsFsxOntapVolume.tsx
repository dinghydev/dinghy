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
  name: resolvableValue(z.string()),
  storage_virtual_machine_id: resolvableValue(z.string()),
  aggregate_configuration: resolvableValue(
    z.object({
      aggregates: z.string().array().optional(),
      constituents_per_aggregate: z.number().optional(),
      total_constituents: z.number(),
    }).optional(),
  ),
  bypass_snaplock_enterprise_retention: resolvableValue(z.boolean().optional()),
  copy_tags_to_backups: resolvableValue(z.boolean().optional()),
  final_backup_tags: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  junction_path: resolvableValue(z.string().optional()),
  ontap_volume_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_style: resolvableValue(z.string().optional()),
  size_in_bytes: resolvableValue(z.string().optional()),
  size_in_megabytes: resolvableValue(z.number().optional()),
  skip_final_backup: resolvableValue(z.boolean().optional()),
  snaplock_configuration: resolvableValue(
    z.object({
      audit_log_volume: z.boolean().optional(),
      privileged_delete: z.string().optional(),
      snaplock_type: z.string(),
      volume_append_mode_enabled: z.boolean().optional(),
      autocommit_period: z.object({
        type: z.string().optional(),
        value: z.number().optional(),
      }).optional(),
      retention_period: z.object({
        default_retention: z.object({
          type: z.string().optional(),
          value: z.number().optional(),
        }).optional(),
        maximum_retention: z.object({
          type: z.string().optional(),
          value: z.number().optional(),
        }).optional(),
        minimum_retention: z.object({
          type: z.string().optional(),
          value: z.number().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  snapshot_policy: resolvableValue(z.string().optional()),
  storage_efficiency_enabled: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tiering_policy: resolvableValue(
    z.object({
      cooling_period: z.number().optional(),
      name: z.string().optional(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  volume_style: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  file_system_id: z.string().optional(),
  flexcache_endpoint_type: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uuid: z.string().optional(),
  volume_type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/fsx_ontap_volume

export function AwsFsxOntapVolume(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_ontap_volume'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFsxOntapVolume = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsFsxOntapVolume, idFilter, baseNode, optional)

export const useAwsFsxOntapVolumes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsFsxOntapVolume, idFilter, baseNode, optional)
