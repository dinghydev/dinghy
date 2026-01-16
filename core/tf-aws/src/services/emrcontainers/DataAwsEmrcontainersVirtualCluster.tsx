import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEmrcontainersVirtualCluster } from './AwsEmrcontainersVirtualCluster.tsx'

export const InputSchema = TfMetaSchema.extend({
  virtual_cluster_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  container_provider: z.object({
    id: z.string(),
    info: z.object({
      eks_info: z.object({
        namespace: z.string(),
      }).array(),
    }).array(),
    type: z.string(),
  }).array().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  state: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/emrcontainers_virtual_cluster

export function DataAwsEmrcontainersVirtualCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEmrcontainersVirtualCluster
      _type='aws_emrcontainers_virtual_cluster'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEmrcontainersVirtualCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsEmrcontainersVirtualCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEmrcontainersVirtualClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsEmrcontainersVirtualCluster,
    idFilter,
    baseNode,
    optional,
  )
