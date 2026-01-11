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
  engine: resolvableValue(z.string()),
  availability_zone_group: resolvableValue(z.string().optional()),
  engine_latest_version: resolvableValue(z.boolean().optional()),
  engine_version: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  instance_class: resolvableValue(z.string().optional()),
  license_model: resolvableValue(z.string().optional()),
  preferred_engine_versions: resolvableValue(z.string().array().optional()),
  preferred_instance_classes: resolvableValue(z.string().array().optional()),
  read_replica_capable: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  storage_type: resolvableValue(z.string().optional()),
  supported_engine_modes: resolvableValue(z.string().array().optional()),
  supported_network_types: resolvableValue(z.string().array().optional()),
  supports_clusters: resolvableValue(z.boolean().optional()),
  supports_enhanced_monitoring: resolvableValue(z.boolean().optional()),
  supports_global_databases: resolvableValue(z.boolean().optional()),
  supports_iam_database_authentication: resolvableValue(z.boolean().optional()),
  supports_iops: resolvableValue(z.boolean().optional()),
  supports_kerberos_authentication: resolvableValue(z.boolean().optional()),
  supports_multi_az: resolvableValue(z.boolean().optional()),
  supports_performance_insights: resolvableValue(z.boolean().optional()),
  supports_storage_autoscaling: resolvableValue(z.boolean().optional()),
  supports_storage_encryption: resolvableValue(z.boolean().optional()),
  vpc: resolvableValue(z.boolean().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  availability_zones: z.string().array().optional(),
  max_iops_per_db_instance: z.number().optional(),
  max_iops_per_gib: z.number().optional(),
  max_storage_size: z.number().optional(),
  min_iops_per_db_instance: z.number().optional(),
  min_iops_per_gib: z.number().optional(),
  min_storage_size: z.number().optional(),
  multi_az_capable: z.boolean().optional(),
  outpost_capable: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/rds_orderable_db_instance

export function DataAwsRdsOrderableDbInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_orderable_db_instance'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRdsOrderableDbInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsRdsOrderableDbInstance,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRdsOrderableDbInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsRdsOrderableDbInstance,
    idFilter,
    baseNode,
    optional,
  )
