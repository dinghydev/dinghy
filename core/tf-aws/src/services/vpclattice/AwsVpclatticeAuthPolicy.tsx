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

export const AwsVpclatticeAuthPolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  resource_identifier: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpclatticeAuthPolicyOutputSchema = z.object({
  id: z.string().optional(),
  policy: z.string().optional(),
  state: z.string().optional(),
})

export type AwsVpclatticeAuthPolicyInputProps =
  & z.input<typeof AwsVpclatticeAuthPolicyInputSchema>
  & NodeProps

export type AwsVpclatticeAuthPolicyOutputProps =
  & z.output<typeof AwsVpclatticeAuthPolicyOutputSchema>
  & z.output<typeof AwsVpclatticeAuthPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpclattice_auth_policy

export function AwsVpclatticeAuthPolicy(
  props: Partial<AwsVpclatticeAuthPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_auth_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpclatticeAuthPolicyInputSchema}
      _outputSchema={AwsVpclatticeAuthPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeAuthPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpclatticeAuthPolicyOutputProps>(
    AwsVpclatticeAuthPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpclatticeAuthPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpclatticeAuthPolicyOutputProps>(
    AwsVpclatticeAuthPolicy,
    idFilter,
    baseNode,
    optional,
  )
