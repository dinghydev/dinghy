import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEcsCluster } from './AwsEcsCluster.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ecs_cluster

export const InputSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  pending_tasks_count: z.number().optional(),
  registered_container_instances_count: z.number().optional(),
  running_tasks_count: z.number().optional(),
  service_connect_defaults: z.object({
    namespace: z.string(),
  }).array().optional(),
  setting: z.object({
    name: z.string(),
    value: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEcsCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEcsCluster
      _type='aws_ecs_cluster'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEcsCluster = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEcsCluster, node, id)

export const useDataAwsEcsClusters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEcsCluster, node, id)
