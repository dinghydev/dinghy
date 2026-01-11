import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRedshiftCluster } from './AwsRedshiftCluster.tsx'

export const InputSchema = z.object({
  cluster_identifier: resolvableValue(z.string()),
  cluster_version: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  allow_version_upgrade: z.boolean().optional(),
  aqua_configuration_status: z.string().optional(),
  arn: z.string().optional(),
  automated_snapshot_retention_period: z.number().optional(),
  availability_zone: z.string().optional(),
  availability_zone_relocation_enabled: z.boolean().optional(),
  bucket_name: z.string().optional(),
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
  database_name: z.string().optional(),
  default_iam_role_arn: z.string().optional(),
  elastic_ip: z.string().optional(),
  enable_logging: z.boolean().optional(),
  encrypted: z.boolean().optional(),
  endpoint: z.string().optional(),
  enhanced_vpc_routing: z.boolean().optional(),
  iam_roles: z.string().array().optional(),
  kms_key_id: z.string().optional(),
  log_destination_type: z.string().optional(),
  log_exports: z.set(z.string()).optional(),
  maintenance_track_name: z.string().optional(),
  manual_snapshot_retention_period: z.number().optional(),
  master_username: z.string().optional(),
  multi_az: z.boolean().optional(),
  node_type: z.string().optional(),
  number_of_nodes: z.number().optional(),
  port: z.number().optional(),
  preferred_maintenance_window: z.string().optional(),
  publicly_accessible: z.boolean().optional(),
  s3_key_prefix: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
  vpc_security_group_ids: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/redshift_cluster

export function DataAwsRedshiftCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRedshiftCluster
      _type='aws_redshift_cluster'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRedshiftCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsRedshiftCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRedshiftClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsRedshiftCluster,
    idFilter,
    baseNode,
    optional,
  )
