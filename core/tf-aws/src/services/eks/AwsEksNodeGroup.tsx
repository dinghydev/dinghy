import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/eks_node_group

export const InputSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  node_role_arn: resolvableValue(z.string()),
  scaling_config: resolvableValue(z.object({
    desired_size: z.number(),
    max_size: z.number(),
    min_size: z.number(),
  })),
  subnet_ids: resolvableValue(z.string().array()),
  ami_type: resolvableValue(z.string().optional()),
  capacity_type: resolvableValue(z.string().optional()),
  disk_size: resolvableValue(z.number().optional()),
  force_update_version: resolvableValue(z.boolean().optional()),
  instance_types: resolvableValue(z.string().array().optional()),
  labels: resolvableValue(z.record(z.string(), z.string()).optional()),
  launch_template: resolvableValue(
    z.object({
      id: z.string().optional(),
      name: z.string().optional(),
      version: z.string(),
    }).optional(),
  ),
  node_group_name: resolvableValue(z.string().optional()),
  node_group_name_prefix: resolvableValue(z.string().optional()),
  node_repair_config: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      max_parallel_nodes_repaired_count: z.number().optional(),
      max_parallel_nodes_repaired_percentage: z.number().optional(),
      max_unhealthy_node_threshold_count: z.number().optional(),
      max_unhealthy_node_threshold_percentage: z.number().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  release_version: resolvableValue(z.string().optional()),
  remote_access: resolvableValue(
    z.object({
      ec2_ssh_key: z.string().optional(),
      source_security_group_ids: z.string().array().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  taint: resolvableValue(
    z.object({
      effect: z.string(),
      key: z.string(),
      value: z.string().optional(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  update_config: resolvableValue(
    z.object({
      max_unavailable: z.number().optional(),
      max_unavailable_percentage: z.number().optional(),
    }).optional(),
  ),
  version: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  resources: z.object({
    autoscaling_groups: z.object({
      name: z.string(),
    }).array(),
    remote_access_security_group_id: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEksNodeGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_node_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEksNodeGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEksNodeGroup, node, id)

export const useAwsEksNodeGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEksNodeGroup, node, id)
