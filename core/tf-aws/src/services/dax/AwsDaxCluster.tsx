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
  cluster_name: resolvableValue(z.string()),
  iam_role_arn: resolvableValue(z.string()),
  node_type: resolvableValue(z.string()),
  replication_factor: resolvableValue(z.number()),
  availability_zones: resolvableValue(z.string().array().optional()),
  cluster_endpoint_encryption_type: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  maintenance_window: resolvableValue(z.string().optional()),
  notification_topic_arn: resolvableValue(z.string().optional()),
  parameter_group_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  server_side_encryption: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
    }).optional(),
  ),
  subnet_group_name: resolvableValue(z.string().optional()),
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
  cluster_address: z.string().optional(),
  configuration_endpoint: z.string().optional(),
  nodes: z.object({
    address: z.string(),
    availability_zone: z.string(),
    id: z.string(),
    port: z.number(),
  }).array().optional(),
  port: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dax_cluster

export function AwsDaxCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dax_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDaxCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsDaxCluster, idFilter, baseNode, optional)

export const useAwsDaxClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsDaxCluster, idFilter, baseNode, optional)
