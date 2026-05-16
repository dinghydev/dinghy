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

export const AwsKmsKeyPolicyInputSchema = TfMetaSchema.extend({
  key_id: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  bypass_policy_lockout_safety_check: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsKmsKeyPolicyOutputSchema = z.object({})

export type AwsKmsKeyPolicyInputProps =
  & z.input<typeof AwsKmsKeyPolicyInputSchema>
  & NodeProps

export type AwsKmsKeyPolicyOutputProps =
  & z.output<typeof AwsKmsKeyPolicyOutputSchema>
  & z.output<typeof AwsKmsKeyPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/kms_key_policy

export function AwsKmsKeyPolicy(props: Partial<AwsKmsKeyPolicyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_key_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsKmsKeyPolicyInputSchema}
      _outputSchema={AwsKmsKeyPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsKmsKeyPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsKmsKeyPolicyOutputProps>(
    AwsKmsKeyPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsKmsKeyPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsKmsKeyPolicyOutputProps>(
    AwsKmsKeyPolicy,
    idFilter,
    baseNode,
    optional,
  )
