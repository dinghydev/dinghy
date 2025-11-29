import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kms_key_policy

export const InputSchema = z.object({
  key_id: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  bypass_policy_lockout_safety_check: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsKmsKeyPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_key_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKmsKeyPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsKmsKeyPolicy, node, id)

export const useAwsKmsKeyPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsKmsKeyPolicy, node, id)
