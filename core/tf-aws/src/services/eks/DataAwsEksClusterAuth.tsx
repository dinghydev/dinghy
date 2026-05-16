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

export const DataAwsEksClusterAuthInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEksClusterAuthOutputSchema = z.object({
  id: z.string().optional(),
  token: z.string().optional(),
})

export type DataAwsEksClusterAuthInputProps =
  & z.input<typeof DataAwsEksClusterAuthInputSchema>
  & NodeProps

export type DataAwsEksClusterAuthOutputProps =
  & z.output<typeof DataAwsEksClusterAuthOutputSchema>
  & z.output<typeof DataAwsEksClusterAuthInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/eks_cluster_auth

export function DataAwsEksClusterAuth(
  props: Partial<DataAwsEksClusterAuthInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_cluster_auth'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEksClusterAuthInputSchema}
      _outputSchema={DataAwsEksClusterAuthOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEksClusterAuth = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEksClusterAuthOutputProps>(
    DataAwsEksClusterAuth,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEksClusterAuths = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEksClusterAuthOutputProps>(
    DataAwsEksClusterAuth,
    idFilter,
    baseNode,
    optional,
  )
