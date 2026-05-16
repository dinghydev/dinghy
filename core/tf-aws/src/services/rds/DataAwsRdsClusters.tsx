import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsRdsClustersInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsRdsClustersOutputSchema = z.object({
  cluster_arns: z.set(z.string()).optional(),
  cluster_identifiers: z.set(z.string()).optional(),
})

export type DataAwsRdsClustersInputProps =
  & z.input<typeof DataAwsRdsClustersInputSchema>
  & NodeProps

export type DataAwsRdsClustersOutputProps =
  & z.output<typeof DataAwsRdsClustersOutputSchema>
  & z.output<typeof DataAwsRdsClustersInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/rds_clusters

export function DataAwsRdsClusters(
  props: Partial<DataAwsRdsClustersInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_clusters'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRdsClustersInputSchema}
      _outputSchema={DataAwsRdsClustersOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRdsClusterss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRdsClustersOutputProps>(
    DataAwsRdsClusters,
    idFilter,
    baseNode,
    optional,
  )
