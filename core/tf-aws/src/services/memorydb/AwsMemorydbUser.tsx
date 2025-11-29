import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/memorydb_user

export const InputSchema = z.object({
  access_string: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  authentication_mode: resolvableValue(z.object({
    password_count: z.number(),
    passwords: z.string().array().optional(),
    type: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  minimum_engine_version: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsMemorydbUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_memorydb_user'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMemorydbUser = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsMemorydbUser, node, id)

export const useAwsMemorydbUsers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsMemorydbUser, node, id)
