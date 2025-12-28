import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEksNodeGroup } from './AwsEksNodeGroup.tsx'

export const InputSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  node_group_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
    source_security_group_ids: z.set(z.string()),
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
  subnet_ids: z.set(z.string()).optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/eks_node_group

export function DataAwsEksNodeGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsEksNodeGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsEksNodeGroup, idFilter, baseNode, optional)

export const useDataAwsEksNodeGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsEksNodeGroup, idFilter, baseNode, optional)
