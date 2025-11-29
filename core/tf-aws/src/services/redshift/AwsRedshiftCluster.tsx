import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshift_cluster

export const InputSchema = z.object({
  allow_version_upgrade: resolvableValue(z.boolean().optional()),
  apply_immediately: resolvableValue(z.boolean().optional()),
  aqua_configuration_status: resolvableValue(z.string().optional()),
  availability_zone_relocation_enabled: resolvableValue(z.boolean().optional()),
  default_iam_role_arn: resolvableValue(z.string().optional()),
  elastic_ip: resolvableValue(z.string().optional()),
  enhanced_vpc_routing: resolvableValue(z.boolean().optional()),
  final_snapshot_identifier: resolvableValue(z.string().optional()),
  iam_roles: resolvableValue(z.string().array().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  maintenance_track_name: resolvableValue(z.string().optional()),
  manage_master_password: resolvableValue(z.boolean().optional()),
  manual_snapshot_retention_period: resolvableValue(z.number().optional()),
  master_password: resolvableValue(z.string().optional()),
  master_password_secret_kms_key_id: resolvableValue(z.string().optional()),
  master_password_wo: resolvableValue(z.string().optional()),
  master_password_wo_version: resolvableValue(z.number().optional()),
  master_username: resolvableValue(z.string().optional()),
  multi_az: resolvableValue(z.boolean().optional()),
  number_of_nodes: resolvableValue(z.number().optional()),
  owner_account: resolvableValue(z.string().optional()),
  publicly_accessible: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  skip_final_snapshot: resolvableValue(z.boolean().optional()),
  snapshot_arn: resolvableValue(z.string().optional()),
  snapshot_cluster_identifier: resolvableValue(z.string().optional()),
  snapshot_identifier: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  automated_snapshot_retention_period: z.number().optional(),
  availability_zone: z.string().optional(),
  cluster_identifier: z.string().optional(),
  cluster_namespace_arn: z.string().optional(),
  cluster_nodes: z.object({
    node_role: z.string(),
    private_ip_address: z.string(),
    public_ip_address: z.string(),
  }).array().optional(),
  cluster_parameter_group_name: z.string().optional(),
  cluster_public_key: z.string().optional(),
  cluster_revision_number: z.string().optional(),
  cluster_subnet_group_name: z.string().optional(),
  cluster_type: z.string().optional(),
  cluster_version: z.string().optional(),
  database_name: z.string().optional(),
  dns_name: z.string().optional(),
  encrypted: z.string().optional(),
  endpoint: z.string().optional(),
  id: z.string().optional(),
  master_password_secret_arn: z.string().optional(),
  node_type: z.string().optional(),
  port: z.number().optional(),
  preferred_maintenance_window: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_security_group_ids: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRedshiftCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftCluster = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRedshiftCluster, node, id)

export const useAwsRedshiftClusters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRedshiftCluster, node, id)
