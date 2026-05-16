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

export const AwsRdsClusterParameterGroupInputSchema = TfMetaSchema.extend({
  family: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  parameter: resolvableValue(
    z.object({
      apply_method: z.string().optional(),
      name: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsRdsClusterParameterGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRdsClusterParameterGroupInputProps =
  & z.input<typeof AwsRdsClusterParameterGroupInputSchema>
  & NodeProps

export type AwsRdsClusterParameterGroupOutputProps =
  & z.output<typeof AwsRdsClusterParameterGroupOutputSchema>
  & z.output<typeof AwsRdsClusterParameterGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/rds_cluster_parameter_group

export function AwsRdsClusterParameterGroup(
  props: Partial<AwsRdsClusterParameterGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_cluster_parameter_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRdsClusterParameterGroupInputSchema}
      _outputSchema={AwsRdsClusterParameterGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsClusterParameterGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRdsClusterParameterGroupOutputProps>(
    AwsRdsClusterParameterGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRdsClusterParameterGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRdsClusterParameterGroupOutputProps>(
    AwsRdsClusterParameterGroup,
    idFilter,
    baseNode,
    optional,
  )
