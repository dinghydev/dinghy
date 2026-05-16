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

export const AwsElasticacheUserInputSchema = TfMetaSchema.extend({
  access_string: resolvableValue(z.string()),
  engine: resolvableValue(z.string()),
  user_id: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  authentication_mode: resolvableValue(
    z.object({
      password_count: z.number().optional(),
      passwords: z.string().array().optional(),
      type: z.string(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  no_password_required: resolvableValue(z.boolean().optional()),
  passwords: resolvableValue(z.string().array().optional()),
  passwords_wo: resolvableValue(z.string().optional()),
  passwords_wo_version: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsElasticacheUserOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsElasticacheUserInputProps =
  & z.input<typeof AwsElasticacheUserInputSchema>
  & NodeProps

export type AwsElasticacheUserOutputProps =
  & z.output<typeof AwsElasticacheUserOutputSchema>
  & z.output<typeof AwsElasticacheUserInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/elasticache_user

export function AwsElasticacheUser(
  props: Partial<AwsElasticacheUserInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticache_user'
      _category='resource'
      _title={_title}
      _inputSchema={AwsElasticacheUserInputSchema}
      _outputSchema={AwsElasticacheUserOutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticacheUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsElasticacheUserOutputProps>(
    AwsElasticacheUser,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElasticacheUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsElasticacheUserOutputProps>(
    AwsElasticacheUser,
    idFilter,
    baseNode,
    optional,
  )
