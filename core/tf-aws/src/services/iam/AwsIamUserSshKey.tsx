import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iam_user_ssh_key

export const InputSchema = z.object({
  encoding: resolvableValue(z.string()),
  public_key: resolvableValue(z.string()),
  username: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  fingerprint: z.string().optional(),
  ssh_public_key_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIamUserSshKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_user_ssh_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIamUserSshKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIamUserSshKey, node, id)

export const useAwsIamUserSshKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIamUserSshKey, node, id)
