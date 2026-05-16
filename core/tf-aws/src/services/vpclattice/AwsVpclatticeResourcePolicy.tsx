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

export const AwsVpclatticeResourcePolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsVpclatticeResourcePolicyOutputSchema = z.object({})

export type AwsVpclatticeResourcePolicyInputProps =
  & z.input<typeof AwsVpclatticeResourcePolicyInputSchema>
  & NodeProps

export type AwsVpclatticeResourcePolicyOutputProps =
  & z.output<typeof AwsVpclatticeResourcePolicyOutputSchema>
  & z.output<typeof AwsVpclatticeResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpclattice_resource_policy

export function AwsVpclatticeResourcePolicy(
  props: Partial<AwsVpclatticeResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpclatticeResourcePolicyInputSchema}
      _outputSchema={AwsVpclatticeResourcePolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpclatticeResourcePolicyOutputProps>(
    AwsVpclatticeResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpclatticeResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpclatticeResourcePolicyOutputProps>(
    AwsVpclatticeResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
