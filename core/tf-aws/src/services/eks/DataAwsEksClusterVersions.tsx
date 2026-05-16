import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEksClusterVersionsInputSchema = TfMetaSchema.extend({
  cluster_type: resolvableValue(z.string().optional()),
  cluster_versions_only: resolvableValue(z.string().array().optional()),
  default_only: resolvableValue(z.boolean().optional()),
  include_all: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  version_status: resolvableValue(z.string().optional()),
})

export const DataAwsEksClusterVersionsOutputSchema = z.object({
  cluster_type: z.string().optional(),
  cluster_versions: z.object({
    cluster_type: z.string(),
    cluster_version: z.string(),
    default_platform_version: z.string(),
    default_version: z.boolean(),
    end_of_extended_support_date: z.string(),
    end_of_standard_support_date: z.string(),
    kubernetes_patch_version: z.string(),
    release_date: z.string(),
    version_status: z.string(),
  }).array().optional(),
  version_status: z.string().optional(),
})

export type DataAwsEksClusterVersionsInputProps =
  & z.input<typeof DataAwsEksClusterVersionsInputSchema>
  & NodeProps

export type DataAwsEksClusterVersionsOutputProps =
  & z.output<typeof DataAwsEksClusterVersionsOutputSchema>
  & z.output<typeof DataAwsEksClusterVersionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/eks_cluster_versions

export function DataAwsEksClusterVersions(
  props: Partial<DataAwsEksClusterVersionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_cluster_versions'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEksClusterVersionsInputSchema}
      _outputSchema={DataAwsEksClusterVersionsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEksClusterVersionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEksClusterVersionsOutputProps>(
    DataAwsEksClusterVersions,
    idFilter,
    baseNode,
    optional,
  )
