import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEksNodeGroup } from './AwsEksNodeGroup.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/eks_node_group

export const InputSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  node_group_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  ami_type: z.string().optional(),
  arn: z.string().optional(),
  capacity_type: z.string().optional(),
  disk_size: z.number().optional(),
  id: z.string().optional(),
  instance_types: z.string().array().optional(),
  labels: z.record(z.string(), z.string()).optional(),
  launch_template: z.object({
    id: z.string(),
    name: z.string(),
    version: z.string(),
  }).array().optional(),
  node_role_arn: z.string().optional(),
  release_version: z.string().optional(),
  remote_access: z.object({
    ec2_ssh_key: z.string(),
    source_security_group_ids: z.string().array(),
  }).array().optional(),
  resources: z.object({
    autoscaling_groups: z.object({
      name: z.string(),
    }).array(),
    remote_access_security_group_id: z.string(),
  }).array().optional(),
  scaling_config: z.object({
    desired_size: z.number(),
    max_size: z.number(),
    min_size: z.number(),
  }).array().optional(),
  status: z.string().optional(),
  subnet_ids: z.string().array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  taints: z.object({
    effect: z.string(),
    key: z.string(),
    value: z.string(),
  }).array().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEksNodeGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEksNodeGroup
      _type='aws_eks_node_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEksNodeGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEksNodeGroup, node, id)

export const useDataAwsEksNodeGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEksNodeGroup, node, id)
