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

export const AwsNeptuneClusterInstanceInputSchema = TfMetaSchema.extend({
  cluster_identifier: resolvableValue(z.string()),
  instance_class: resolvableValue(z.string()),
  apply_immediately: resolvableValue(z.boolean().optional()),
  auto_minor_version_upgrade: resolvableValue(z.boolean().optional()),
  availability_zone: resolvableValue(z.string().optional()),
  engine: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  identifier: resolvableValue(z.string().optional()),
  identifier_prefix: resolvableValue(z.string().optional()),
  neptune_parameter_group_name: resolvableValue(z.string().optional()),
  neptune_subnet_group_name: resolvableValue(z.string().optional()),
  port: resolvableValue(z.number().optional()),
  preferred_backup_window: resolvableValue(z.string().optional()),
  preferred_maintenance_window: resolvableValue(z.string().optional()),
  promotion_tier: resolvableValue(z.number().optional()),
  publicly_accessible: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  skip_final_snapshot: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsNeptuneClusterInstanceOutputSchema = z.object({
  address: z.string().optional(),
  arn: z.string().optional(),
  dbi_resource_id: z.string().optional(),
  endpoint: z.string().optional(),
  id: z.string().optional(),
  kms_key_arn: z.string().optional(),
  storage_encrypted: z.boolean().optional(),
  storage_type: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  writer: z.boolean().optional(),
})

export type AwsNeptuneClusterInstanceInputProps =
  & z.input<typeof AwsNeptuneClusterInstanceInputSchema>
  & NodeProps

export type AwsNeptuneClusterInstanceOutputProps =
  & z.output<typeof AwsNeptuneClusterInstanceOutputSchema>
  & z.output<typeof AwsNeptuneClusterInstanceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster_instance

export function AwsNeptuneClusterInstance(
  props: Partial<AwsNeptuneClusterInstanceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_neptune_cluster_instance'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNeptuneClusterInstanceInputSchema}
      _outputSchema={AwsNeptuneClusterInstanceOutputSchema}
      {...props}
    />
  )
}

export const useAwsNeptuneClusterInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNeptuneClusterInstanceOutputProps>(
    AwsNeptuneClusterInstance,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNeptuneClusterInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNeptuneClusterInstanceOutputProps>(
    AwsNeptuneClusterInstance,
    idFilter,
    baseNode,
    optional,
  )
