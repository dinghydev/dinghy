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

export const AwsNeptuneClusterParameterGroupInputSchema = TfMetaSchema.extend({
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

export const AwsNeptuneClusterParameterGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNeptuneClusterParameterGroupInputProps =
  & z.input<typeof AwsNeptuneClusterParameterGroupInputSchema>
  & NodeProps

export type AwsNeptuneClusterParameterGroupOutputProps =
  & z.output<typeof AwsNeptuneClusterParameterGroupOutputSchema>
  & z.output<typeof AwsNeptuneClusterParameterGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster_parameter_group

export function AwsNeptuneClusterParameterGroup(
  props: Partial<AwsNeptuneClusterParameterGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_neptune_cluster_parameter_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNeptuneClusterParameterGroupInputSchema}
      _outputSchema={AwsNeptuneClusterParameterGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsNeptuneClusterParameterGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNeptuneClusterParameterGroupOutputProps>(
    AwsNeptuneClusterParameterGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNeptuneClusterParameterGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNeptuneClusterParameterGroupOutputProps>(
    AwsNeptuneClusterParameterGroup,
    idFilter,
    baseNode,
    optional,
  )
