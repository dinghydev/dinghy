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

export const DataAwsEcsClusterInputSchema = TfMetaSchema.extend({
  cluster_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEcsClusterOutputSchema = z.object({
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

export type DataAwsEcsClusterInputProps =
  & z.input<typeof DataAwsEcsClusterInputSchema>
  & NodeProps

export type DataAwsEcsClusterOutputProps =
  & z.output<typeof DataAwsEcsClusterOutputSchema>
  & z.output<typeof DataAwsEcsClusterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ecs_cluster

export function DataAwsEcsCluster(props: Partial<DataAwsEcsClusterInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEcsCluster
      _type='aws_ecs_cluster'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEcsClusterInputSchema}
      _outputSchema={DataAwsEcsClusterOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEcsCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEcsClusterOutputProps>(
    DataAwsEcsCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEcsClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEcsClusterOutputProps>(
    DataAwsEcsCluster,
    idFilter,
    baseNode,
    optional,
  )
