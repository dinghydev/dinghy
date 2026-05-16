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

export const AwsDmsReplicationConfigInputSchema = TfMetaSchema.extend({
  compute_config: resolvableValue(z.object({
    availability_zone: z.string().optional(),
    dns_name_servers: z.string().optional(),
    kms_key_id: z.string().optional(),
    max_capacity_units: z.number().optional(),
    min_capacity_units: z.number().optional(),
    multi_az: z.boolean().optional(),
    preferred_maintenance_window: z.string().optional(),
    replication_subnet_group_id: z.string(),
    vpc_security_group_ids: z.string().array().optional(),
  })),
  replication_config_identifier: resolvableValue(z.string()),
  replication_type: resolvableValue(z.string()),
  source_endpoint_arn: resolvableValue(z.string()),
  table_mappings: resolvableValue(z.string()),
  target_endpoint_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  replication_settings: resolvableValue(z.string().optional()),
  resource_identifier: resolvableValue(z.string().optional()),
  start_replication: resolvableValue(z.boolean().optional()),
  supplemental_settings: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDmsReplicationConfigOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsDmsReplicationConfigImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDmsReplicationConfigInputProps =
  & z.input<typeof AwsDmsReplicationConfigInputSchema>
  & z.input<typeof AwsDmsReplicationConfigImportSchema>
  & NodeProps

export type AwsDmsReplicationConfigOutputProps =
  & z.output<typeof AwsDmsReplicationConfigOutputSchema>
  & z.output<typeof AwsDmsReplicationConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dms_replication_config

export function AwsDmsReplicationConfig(
  props: Partial<AwsDmsReplicationConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dms_replication_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDmsReplicationConfigInputSchema}
      _outputSchema={AwsDmsReplicationConfigOutputSchema}
      _importSchema={AwsDmsReplicationConfigImportSchema}
      {...props}
    />
  )
}

export const useAwsDmsReplicationConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDmsReplicationConfigOutputProps>(
    AwsDmsReplicationConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDmsReplicationConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDmsReplicationConfigOutputProps>(
    AwsDmsReplicationConfig,
    idFilter,
    baseNode,
    optional,
  )
