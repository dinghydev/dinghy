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

export const AwsDynamodbTableReplicaInputSchema = TfMetaSchema.extend({
  global_table_arn: resolvableValue(z.string()),
  deletion_protection_enabled: resolvableValue(z.boolean().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  point_in_time_recovery: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  table_class_override: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDynamodbTableReplicaOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDynamodbTableReplicaInputProps =
  & z.input<typeof AwsDynamodbTableReplicaInputSchema>
  & NodeProps

export type AwsDynamodbTableReplicaOutputProps =
  & z.output<typeof AwsDynamodbTableReplicaOutputSchema>
  & z.output<typeof AwsDynamodbTableReplicaInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dynamodb_table_replica

export function AwsDynamodbTableReplica(
  props: Partial<AwsDynamodbTableReplicaInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_table_replica'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDynamodbTableReplicaInputSchema}
      _outputSchema={AwsDynamodbTableReplicaOutputSchema}
      {...props}
    />
  )
}

export const useAwsDynamodbTableReplica = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDynamodbTableReplicaOutputProps>(
    AwsDynamodbTableReplica,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDynamodbTableReplicas = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDynamodbTableReplicaOutputProps>(
    AwsDynamodbTableReplica,
    idFilter,
    baseNode,
    optional,
  )
