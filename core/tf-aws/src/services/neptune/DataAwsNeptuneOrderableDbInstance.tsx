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
  engine: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  instance_class: resolvableValue(z.string().optional()),
  license_model: resolvableValue(z.string().optional()),
  preferred_instance_classes: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  vpc: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  availability_zones: z.string().array().optional(),
  max_iops_per_db_instance: z.number().optional(),
  max_iops_per_gib: z.number().optional(),
  max_storage_size: z.number().optional(),
  min_iops_per_db_instance: z.number().optional(),
  min_iops_per_gib: z.number().optional(),
  min_storage_size: z.number().optional(),
  multi_az_capable: z.boolean().optional(),
  read_replica_capable: z.boolean().optional(),
  storage_type: z.string().optional(),
  supports_enhanced_monitoring: z.boolean().optional(),
  supports_iam_database_authentication: z.boolean().optional(),
  supports_iops: z.boolean().optional(),
  supports_performance_insights: z.boolean().optional(),
  supports_storage_encryption: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/neptune_orderable_db_instance

export function DataAwsNeptuneOrderableDbInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_neptune_orderable_db_instance'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsNeptuneOrderableDbInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsNeptuneOrderableDbInstance,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsNeptuneOrderableDbInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsNeptuneOrderableDbInstance,
    idFilter,
    baseNode,
    optional,
  )
