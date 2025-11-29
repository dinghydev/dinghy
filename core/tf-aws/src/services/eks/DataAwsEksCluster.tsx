import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEksCluster } from './AwsEksCluster.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/eks_cluster

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  access_config: z.object({
    authentication_mode: z.string(),
    bootstrap_cluster_creator_admin_permissions: z.boolean(),
  }).array().optional(),
  arn: z.string().optional(),
  certificate_authority: z.object({
    data: z.string(),
  }).array().optional(),
  cluster_id: z.string().optional(),
  compute_config: z.object({
    enabled: z.boolean(),
    node_pools: z.string().array(),
    node_role_arn: z.string(),
  }).array().optional(),
  created_at: z.string().optional(),
  deletion_protection: z.boolean().optional(),
  enabled_cluster_log_types: z.string().array().optional(),
  endpoint: z.string().optional(),
  id: z.string().optional(),
  identity: z.object({
    oidc: z.object({
      issuer: z.string(),
    }).array(),
  }).array().optional(),
  kubernetes_network_config: z.object({
    elastic_load_balancing: z.object({
      enabled: z.boolean(),
    }).array(),
    ip_family: z.string(),
    service_ipv4_cidr: z.string(),
    service_ipv6_cidr: z.string(),
  }).array().optional(),
  outpost_config: z.object({
    control_plane_instance_type: z.string(),
    control_plane_placement: z.object({
      group_name: z.string(),
    }).array(),
    outpost_arns: z.string().array(),
  }).array().optional(),
  platform_version: z.string().optional(),
  remote_network_config: z.object({
    remote_node_networks: z.object({
      cidrs: z.string().array(),
    }).array(),
    remote_pod_networks: z.object({
      cidrs: z.string().array(),
    }).array(),
  }).array().optional(),
  role_arn: z.string().optional(),
  status: z.string().optional(),
  storage_config: z.object({
    block_storage: z.object({
      enabled: z.boolean(),
    }).array(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  upgrade_policy: z.object({
    support_type: z.string(),
  }).array().optional(),
  version: z.string().optional(),
  vpc_config: z.object({
    cluster_security_group_id: z.string(),
    endpoint_private_access: z.boolean(),
    endpoint_public_access: z.boolean(),
    public_access_cidrs: z.string().array(),
    security_group_ids: z.string().array(),
    subnet_ids: z.string().array(),
    vpc_id: z.string(),
  }).array().optional(),
  zonal_shift_config: z.object({
    enabled: z.boolean(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEksCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEksCluster
      _type='aws_eks_cluster'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEksCluster = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEksCluster, node, id)

export const useDataAwsEksClusters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEksCluster, node, id)
