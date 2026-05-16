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

export const EphemeralAwsEksClusterAuthInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const EphemeralAwsEksClusterAuthOutputSchema = z.object({
  token: z.string().optional(),
})

export type EphemeralAwsEksClusterAuthInputProps =
  & z.input<typeof EphemeralAwsEksClusterAuthInputSchema>
  & NodeProps

export type EphemeralAwsEksClusterAuthOutputProps =
  & z.output<typeof EphemeralAwsEksClusterAuthOutputSchema>
  & z.output<typeof EphemeralAwsEksClusterAuthInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/ephemeral-resources/eks_cluster_auth

export function EphemeralAwsEksClusterAuth(
  props: Partial<EphemeralAwsEksClusterAuthInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_cluster_auth'
      _category='ephemeral'
      _title={_title}
      _inputSchema={EphemeralAwsEksClusterAuthInputSchema}
      _outputSchema={EphemeralAwsEksClusterAuthOutputSchema}
      {...props}
    />
  )
}

export const useEphemeralAwsEksClusterAuth = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<EphemeralAwsEksClusterAuthOutputProps>(
    EphemeralAwsEksClusterAuth,
    idFilter,
    baseNode,
    optional,
  )

export const useEphemeralAwsEksClusterAuths = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<EphemeralAwsEksClusterAuthOutputProps>(
    EphemeralAwsEksClusterAuth,
    idFilter,
    baseNode,
    optional,
  )
