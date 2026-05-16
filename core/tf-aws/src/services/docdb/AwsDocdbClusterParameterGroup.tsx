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

export const AwsDocdbClusterParameterGroupInputSchema = TfMetaSchema.extend({
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

export const AwsDocdbClusterParameterGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDocdbClusterParameterGroupInputProps =
  & z.input<typeof AwsDocdbClusterParameterGroupInputSchema>
  & NodeProps

export type AwsDocdbClusterParameterGroupOutputProps =
  & z.output<typeof AwsDocdbClusterParameterGroupOutputSchema>
  & z.output<typeof AwsDocdbClusterParameterGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/docdb_cluster_parameter_group

export function AwsDocdbClusterParameterGroup(
  props: Partial<AwsDocdbClusterParameterGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_docdb_cluster_parameter_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDocdbClusterParameterGroupInputSchema}
      _outputSchema={AwsDocdbClusterParameterGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsDocdbClusterParameterGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDocdbClusterParameterGroupOutputProps>(
    AwsDocdbClusterParameterGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDocdbClusterParameterGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDocdbClusterParameterGroupOutputProps>(
    AwsDocdbClusterParameterGroup,
    idFilter,
    baseNode,
    optional,
  )
