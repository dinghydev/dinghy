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

export const DataAwsElasticacheUserInputSchema = TfMetaSchema.extend({
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
})

export const DataAwsElasticacheUserOutputSchema = z.object({
  access_string: z.string().optional(),
  user_id: z.string().optional(),
  user_name: z.string().optional(),
})

export type DataAwsElasticacheUserInputProps =
  & z.input<typeof DataAwsElasticacheUserInputSchema>
  & NodeProps

export type DataAwsElasticacheUserOutputProps =
  & z.output<typeof DataAwsElasticacheUserOutputSchema>
  & z.output<typeof DataAwsElasticacheUserInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/elasticache_user

export function DataAwsElasticacheUser(
  props: Partial<DataAwsElasticacheUserInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsElasticacheUser
      _type='aws_elasticache_user'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsElasticacheUserInputSchema}
      _outputSchema={DataAwsElasticacheUserOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsElasticacheUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsElasticacheUserOutputProps>(
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
  useTypedNodes<DataAwsElasticacheUserOutputProps>(
    DataAwsElasticacheUser,
    idFilter,
    baseNode,
    optional,
  )
