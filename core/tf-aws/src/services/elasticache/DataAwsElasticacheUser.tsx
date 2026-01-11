import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsElasticacheUser } from './AwsElasticacheUser.tsx'

export const InputSchema = z.object({
  user_id: resolvableValue(z.string()),
  authentication_mode: resolvableValue(
    z.object({
      password_count: z.number().optional(),
      type: z.string().optional(),
    }).array().optional(),
  ),
  engine: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  no_password_required: resolvableValue(z.boolean().optional()),
  passwords: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/elasticache_user

export function DataAwsElasticacheUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsElasticacheUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsElasticacheUser,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsElasticacheUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsElasticacheUser,
    idFilter,
    baseNode,
    optional,
  )
