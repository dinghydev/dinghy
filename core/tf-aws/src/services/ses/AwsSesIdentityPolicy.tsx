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

export const AwsSesIdentityPolicyInputSchema = TfMetaSchema.extend({
  identity: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSesIdentityPolicyOutputSchema = z.object({})

export type AwsSesIdentityPolicyInputProps =
  & z.input<typeof AwsSesIdentityPolicyInputSchema>
  & NodeProps

export type AwsSesIdentityPolicyOutputProps =
  & z.output<typeof AwsSesIdentityPolicyOutputSchema>
  & z.output<typeof AwsSesIdentityPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ses_identity_policy

export function AwsSesIdentityPolicy(
  props: Partial<AwsSesIdentityPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_identity_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesIdentityPolicyInputSchema}
      _outputSchema={AwsSesIdentityPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesIdentityPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesIdentityPolicyOutputProps>(
    AwsSesIdentityPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesIdentityPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesIdentityPolicyOutputProps>(
    AwsSesIdentityPolicy,
    idFilter,
    baseNode,
    optional,
  )
