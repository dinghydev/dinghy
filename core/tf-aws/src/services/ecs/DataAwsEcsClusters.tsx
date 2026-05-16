import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEcsClustersInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEcsClustersOutputSchema = z.object({
  cluster_arns: z.string().array().optional(),
})

export type DataAwsEcsClustersInputProps =
  & z.input<typeof DataAwsEcsClustersInputSchema>
  & NodeProps

export type DataAwsEcsClustersOutputProps =
  & z.output<typeof DataAwsEcsClustersOutputSchema>
  & z.output<typeof DataAwsEcsClustersInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ecs_clusters

export function DataAwsEcsClusters(
  props: Partial<DataAwsEcsClustersInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_clusters'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEcsClustersInputSchema}
      _outputSchema={DataAwsEcsClustersOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcsClusterss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEcsClustersOutputProps>(
    DataAwsEcsClusters,
    idFilter,
    baseNode,
    optional,
  )
