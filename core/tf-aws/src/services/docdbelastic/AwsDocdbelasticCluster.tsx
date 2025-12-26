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
  admin_user_name: resolvableValue(z.string()),
  admin_user_password: resolvableValue(z.string()),
  auth_type: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  shard_capacity: resolvableValue(z.number()),
  shard_count: resolvableValue(z.number()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  backup_retention_period: resolvableValue(z.number().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  preferred_backup_window: resolvableValue(z.string().optional()),
  preferred_maintenance_window: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.string().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/docdbelastic_cluster

export function AwsDocdbelasticCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_docdbelastic_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsDocdbelasticCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsDocdbelasticCluster,
    idFilter,
    baseNode,
    optional,
  )
