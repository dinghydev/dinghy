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

export const AwsElasticacheUserGroupInputSchema = TfMetaSchema.extend({
  engine: resolvableValue(z.string()),
  user_group_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  user_ids: resolvableValue(z.string().array().optional()),
})

export const AwsElasticacheUserGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsElasticacheUserGroupInputProps =
  & z.input<typeof AwsElasticacheUserGroupInputSchema>
  & NodeProps

export type AwsElasticacheUserGroupOutputProps =
  & z.output<typeof AwsElasticacheUserGroupOutputSchema>
  & z.output<typeof AwsElasticacheUserGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/elasticache_user_group

export function AwsElasticacheUserGroup(
  props: Partial<AwsElasticacheUserGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticache_user_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsElasticacheUserGroupInputSchema}
      _outputSchema={AwsElasticacheUserGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticacheUserGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsElasticacheUserGroupOutputProps>(
    AwsElasticacheUserGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElasticacheUserGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsElasticacheUserGroupOutputProps>(
    AwsElasticacheUserGroup,
    idFilter,
    baseNode,
    optional,
  )
