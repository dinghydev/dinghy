import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMemorydbUser } from './AwsMemorydbUser.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/memorydb_user

export const InputSchema = z.object({
  user_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  access_string: z.string().optional(),
  arn: z.string().optional(),
  authentication_mode: z.object({
    password_count: z.number(),
    type: z.string(),
  }).array().optional(),
  id: z.string().optional(),
  minimum_engine_version: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsMemorydbUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsMemorydbUser
      _type='aws_memorydb_user'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMemorydbUser = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsMemorydbUser, node, id)

export const useDataAwsMemorydbUsers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsMemorydbUser, node, id)
