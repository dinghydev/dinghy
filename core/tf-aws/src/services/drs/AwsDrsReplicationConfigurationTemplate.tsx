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
  associate_default_security_group: resolvableValue(z.boolean()),
  bandwidth_throttling: resolvableValue(z.number()),
  create_public_ip: resolvableValue(z.boolean()),
  data_plane_routing: resolvableValue(z.string()),
  default_large_staging_disk_type: resolvableValue(z.string()),
  ebs_encryption: resolvableValue(z.string()),
  replication_server_instance_type: resolvableValue(z.string()),
  replication_servers_security_groups_ids: resolvableValue(z.string().array()),
  staging_area_subnet_id: resolvableValue(z.string()),
  staging_area_tags: resolvableValue(z.record(z.string(), z.string())),
  use_dedicated_replication_server: resolvableValue(z.boolean()),
  auto_replicate_new_disks: resolvableValue(z.boolean().optional()),
  ebs_encryption_key_arn: resolvableValue(z.string().optional()),
  pit_policy: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      interval: z.number(),
      retention_duration: z.number(),
      rule_id: z.number().optional(),
      units: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/drs_replication_configuration_template

export function AwsDrsReplicationConfigurationTemplate(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_drs_replication_configuration_template'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDrsReplicationConfigurationTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDrsReplicationConfigurationTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDrsReplicationConfigurationTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDrsReplicationConfigurationTemplate,
    idFilter,
    baseNode,
    optional,
  )
