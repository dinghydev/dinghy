import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamUserSshKey } from './AwsIamUserSshKey.tsx'

export const InputSchema = z.object({
  encoding: resolvableValue(z.string()),
  ssh_public_key_id: resolvableValue(z.string()),
  username: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  fingerprint: z.string().optional(),
  public_key: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_user_ssh_key

export function DataAwsIamUserSshKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsIamUserSshKey
      _type='aws_iam_user_ssh_key'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamUserSshKey = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsIamUserSshKey, idFilter, baseNode)

export const useDataAwsIamUserSshKeys = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(DataAwsIamUserSshKey, idFilter, baseNode)
