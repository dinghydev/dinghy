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

export const AwsSesv2EmailIdentityPolicyInputSchema = TfMetaSchema.extend({
  email_identity: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  policy_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSesv2EmailIdentityPolicyOutputSchema = z.object({})

export type AwsSesv2EmailIdentityPolicyInputProps =
  & z.input<typeof AwsSesv2EmailIdentityPolicyInputSchema>
  & NodeProps

export type AwsSesv2EmailIdentityPolicyOutputProps =
  & z.output<typeof AwsSesv2EmailIdentityPolicyOutputSchema>
  & z.output<typeof AwsSesv2EmailIdentityPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_email_identity_policy

export function AwsSesv2EmailIdentityPolicy(
  props: Partial<AwsSesv2EmailIdentityPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_email_identity_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesv2EmailIdentityPolicyInputSchema}
      _outputSchema={AwsSesv2EmailIdentityPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2EmailIdentityPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesv2EmailIdentityPolicyOutputProps>(
    AwsSesv2EmailIdentityPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesv2EmailIdentityPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesv2EmailIdentityPolicyOutputProps>(
    AwsSesv2EmailIdentityPolicy,
    idFilter,
    baseNode,
    optional,
  )
