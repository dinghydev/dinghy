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

export const AwsElasticacheSubnetGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  subnet_ids: resolvableValue(z.string().array()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsElasticacheSubnetGroupOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type AwsElasticacheSubnetGroupInputProps =
  & z.input<typeof AwsElasticacheSubnetGroupInputSchema>
  & NodeProps

export type AwsElasticacheSubnetGroupOutputProps =
  & z.output<typeof AwsElasticacheSubnetGroupOutputSchema>
  & z.output<typeof AwsElasticacheSubnetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/elasticache_subnet_group

export function AwsElasticacheSubnetGroup(
  props: Partial<AwsElasticacheSubnetGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticache_subnet_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsElasticacheSubnetGroupInputSchema}
      _outputSchema={AwsElasticacheSubnetGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticacheSubnetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsElasticacheSubnetGroupOutputProps>(
    AwsElasticacheSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElasticacheSubnetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsElasticacheSubnetGroupOutputProps>(
    AwsElasticacheSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )
