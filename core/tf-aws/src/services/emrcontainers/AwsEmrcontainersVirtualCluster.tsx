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

export const AwsEmrcontainersVirtualClusterInputSchema = TfMetaSchema.extend({
  container_provider: resolvableValue(z.object({
    id: z.string(),
    type: z.string(),
    info: z.object({
      eks_info: z.object({
        namespace: z.string().optional(),
      }),
    }),
  })),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEmrcontainersVirtualClusterOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEmrcontainersVirtualClusterInputProps =
  & z.input<typeof AwsEmrcontainersVirtualClusterInputSchema>
  & NodeProps

export type AwsEmrcontainersVirtualClusterOutputProps =
  & z.output<typeof AwsEmrcontainersVirtualClusterOutputSchema>
  & z.output<typeof AwsEmrcontainersVirtualClusterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/emrcontainers_virtual_cluster

export function AwsEmrcontainersVirtualCluster(
  props: Partial<AwsEmrcontainersVirtualClusterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emrcontainers_virtual_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEmrcontainersVirtualClusterInputSchema}
      _outputSchema={AwsEmrcontainersVirtualClusterOutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrcontainersVirtualCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEmrcontainersVirtualClusterOutputProps>(
    AwsEmrcontainersVirtualCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEmrcontainersVirtualClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEmrcontainersVirtualClusterOutputProps>(
    AwsEmrcontainersVirtualCluster,
    idFilter,
    baseNode,
    optional,
  )
