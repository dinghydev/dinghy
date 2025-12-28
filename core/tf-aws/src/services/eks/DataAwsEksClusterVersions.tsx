import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  cluster_type: resolvableValue(z.string().optional()),
  cluster_versions_only: resolvableValue(z.string().array().optional()),
  default_only: resolvableValue(z.boolean().optional()),
  include_all: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  version_status: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/eks_cluster_versions

export function DataAwsEksClusterVersions(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_cluster_versions'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEksClusterVersionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsEksClusterVersions,
    idFilter,
    baseNode,
    optional,
  )
