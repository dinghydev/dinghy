import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsElasticacheUser } from './AwsElasticacheUser.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/elasticache_user

export const InputSchema = z.object({
  authentication_mode: resolvableValue(
    z.object({
      password_count: z.number().optional(),
      type: z.string().optional(),
    }).optional(),
  ),
  engine: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  no_password_required: resolvableValue(z.boolean().optional()),
  passwords: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  access_string: z.string().optional(),
  user_id: z.string().optional(),
  user_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsElasticacheUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsElasticacheUser
      _type='aws_elasticache_user'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsElasticacheUser = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsElasticacheUser, node, id)

export const useDataAwsElasticacheUsers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsElasticacheUser, node, id)
