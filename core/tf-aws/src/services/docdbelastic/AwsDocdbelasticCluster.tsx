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

export const AwsDocdbelasticClusterInputSchema = TfMetaSchema.extend({
  admin_user_name: resolvableValue(z.string()),
  admin_user_password: resolvableValue(z.string()),
  auth_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  shard_capacity: resolvableValue(z.number()),
  shard_count: resolvableValue(z.number()),
  backup_retention_period: resolvableValue(z.number().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  preferred_backup_window: resolvableValue(z.string().optional()),
  preferred_maintenance_window: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  shard_instance_count: resolvableValue(z.number().optional()),
  subnet_ids: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_security_group_ids: resolvableValue(z.string().array().optional()),
})

export const AwsDocdbelasticClusterOutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsDocdbelasticClusterImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDocdbelasticClusterInputProps =
  & z.input<typeof AwsDocdbelasticClusterInputSchema>
  & z.input<typeof AwsDocdbelasticClusterImportSchema>
  & NodeProps

export type AwsDocdbelasticClusterOutputProps =
  & z.output<typeof AwsDocdbelasticClusterOutputSchema>
  & z.output<typeof AwsDocdbelasticClusterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/docdbelastic_cluster

export function AwsDocdbelasticCluster(
  props: Partial<AwsDocdbelasticClusterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_docdbelastic_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDocdbelasticClusterInputSchema}
      _outputSchema={AwsDocdbelasticClusterOutputSchema}
      _importSchema={AwsDocdbelasticClusterImportSchema}
      {...props}
    />
  )
}

export const useAwsDocdbelasticCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDocdbelasticClusterOutputProps>(
    AwsDocdbelasticCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDocdbelasticClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDocdbelasticClusterOutputProps>(
    AwsDocdbelasticCluster,
    idFilter,
    baseNode,
    optional,
  )
