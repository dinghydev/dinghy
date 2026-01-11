import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEcsCluster } from './AwsEcsCluster.tsx'

export const InputSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  pending_tasks_count: z.number().optional(),
  registered_container_instances_count: z.number().optional(),
  running_tasks_count: z.number().optional(),
  service_connect_defaults: z.object({
    namespace: z.string(),
  }).array().optional(),
  setting: z.set(z.object({
    name: z.string(),
    value: z.string(),
  })).optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ecs_cluster

export function DataAwsEcsCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsEcsCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsEcsCluster, idFilter, baseNode, optional)

export const useDataAwsEcsClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsEcsCluster, idFilter, baseNode, optional)
