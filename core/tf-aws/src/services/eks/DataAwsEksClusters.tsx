import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEksClustersInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEksClustersOutputSchema = z.object({
  id: z.string().optional(),
  names: z.set(z.string()).optional(),
})

export type DataAwsEksClustersInputProps =
  & z.input<typeof DataAwsEksClustersInputSchema>
  & NodeProps

export type DataAwsEksClustersOutputProps =
  & z.output<typeof DataAwsEksClustersOutputSchema>
  & z.output<typeof DataAwsEksClustersInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/eks_clusters

export function DataAwsEksClusters(
  props: Partial<DataAwsEksClustersInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_clusters'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEksClustersInputSchema}
      _outputSchema={DataAwsEksClustersOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEksClusterss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEksClustersOutputProps>(
    DataAwsEksClusters,
    idFilter,
    baseNode,
    optional,
  )
