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
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  vpc_config: resolvableValue(z.object({
    cluster_security_group_id: z.string(),
    endpoint_private_access: z.boolean().optional(),
    endpoint_public_access: z.boolean().optional(),
    public_access_cidrs: z.string().array().optional(),
    security_group_ids: z.string().array().optional(),
    subnet_ids: z.string().array(),
    vpc_id: z.string(),
  })),
  access_config: resolvableValue(
    z.object({
      authentication_mode: z.string().optional(),
      bootstrap_cluster_creator_admin_permissions: z.boolean().optional(),
    }).optional(),
  ),
  bootstrap_self_managed_addons: resolvableValue(z.boolean().optional()),
  compute_config: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      node_pools: z.string().array().optional(),
      node_role_arn: z.string().optional(),
    }).optional(),
  ),
  deletion_protection: resolvableValue(z.boolean().optional()),
  enabled_cluster_log_types: resolvableValue(z.string().array().optional()),
  encryption_config: resolvableValue(
    z.object({
      resources: z.string().array(),
      provider: z.object({
        key_arn: z.string(),
      }),
    }).optional(),
  ),
  force_update_version: resolvableValue(z.boolean().optional()),
  kubernetes_network_config: resolvableValue(
    z.object({
      ip_family: z.string().optional(),
      service_ipv4_cidr: z.string().optional(),
      service_ipv6_cidr: z.string(),
      elastic_load_balancing: z.object({
        enabled: z.boolean().optional(),
      }).optional(),
    }).optional(),
  ),
  outpost_config: resolvableValue(
    z.object({
      control_plane_instance_type: z.string(),
      outpost_arns: z.string().array(),
      control_plane_placement: z.object({
        group_name: z.string(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  remote_network_config: resolvableValue(
    z.object({
      remote_node_networks: z.object({
        cidrs: z.string().array().optional(),
      }),
      remote_pod_networks: z.object({
        cidrs: z.string().array().optional(),
      }).optional(),
    }).optional(),
  ),
  storage_config: resolvableValue(
    z.object({
      block_storage: z.object({
        enabled: z.boolean().optional(),
      }).optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  upgrade_policy: resolvableValue(
    z.object({
      support_type: z.string().optional(),
    }).optional(),
  ),
  version: resolvableValue(z.string().optional()),
  zonal_shift_config: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  certificate_authority: z.object({
    data: z.string(),
  }).array().optional(),
  cluster_id: z.string().optional(),
  created_at: z.string().optional(),
  endpoint: z.string().optional(),
  id: z.string().optional(),
  identity: z.object({
    oidc: z.object({
      issuer: z.string(),
    }).array(),
  }).array().optional(),
  platform_version: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/eks_cluster

export function AwsEksCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEksCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsEksCluster, idFilter, baseNode, optional)

export const useAwsEksClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsEksCluster, idFilter, baseNode, optional)
