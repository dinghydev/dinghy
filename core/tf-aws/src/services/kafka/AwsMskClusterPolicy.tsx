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

export const AwsMskClusterPolicyInputSchema = TfMetaSchema.extend({
  cluster_arn: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsMskClusterPolicyOutputSchema = z.object({
  current_version: z.string().optional(),
  id: z.string().optional(),
})

export type AwsMskClusterPolicyInputProps =
  & z.input<typeof AwsMskClusterPolicyInputSchema>
  & NodeProps

export type AwsMskClusterPolicyOutputProps =
  & z.output<typeof AwsMskClusterPolicyOutputSchema>
  & z.output<typeof AwsMskClusterPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_cluster_policy

export function AwsMskClusterPolicy(
  props: Partial<AwsMskClusterPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_cluster_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMskClusterPolicyInputSchema}
      _outputSchema={AwsMskClusterPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsMskClusterPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMskClusterPolicyOutputProps>(
    AwsMskClusterPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMskClusterPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMskClusterPolicyOutputProps>(
    AwsMskClusterPolicy,
    idFilter,
    baseNode,
    optional,
  )
