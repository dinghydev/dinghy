import {
  camelCaseToWords,
  type NodeProps,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamUser } from './AwsIamUser.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_user

export const InputSchema = z.object({})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  path: z.string().optional(),
  permissions_boundary: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  user_id: z.string().optional(),
  user_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsIamUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsIamUser
      _type='aws_iam_user'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamUser = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsIamUser, node, id)

export const useDataAwsIamUsers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsIamUser, node, id)
