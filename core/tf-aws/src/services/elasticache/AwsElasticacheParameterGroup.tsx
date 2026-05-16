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

export const AwsElasticacheParameterGroupInputSchema = TfMetaSchema.extend({
  family: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  parameter: resolvableValue(
    z.object({
      name: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsElasticacheParameterGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsElasticacheParameterGroupInputProps =
  & z.input<typeof AwsElasticacheParameterGroupInputSchema>
  & NodeProps

export type AwsElasticacheParameterGroupOutputProps =
  & z.output<typeof AwsElasticacheParameterGroupOutputSchema>
  & z.output<typeof AwsElasticacheParameterGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/elasticache_parameter_group

export function AwsElasticacheParameterGroup(
  props: Partial<AwsElasticacheParameterGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticache_parameter_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsElasticacheParameterGroupInputSchema}
      _outputSchema={AwsElasticacheParameterGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticacheParameterGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsElasticacheParameterGroupOutputProps>(
    AwsElasticacheParameterGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElasticacheParameterGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsElasticacheParameterGroupOutputProps>(
    AwsElasticacheParameterGroup,
    idFilter,
    baseNode,
    optional,
  )
