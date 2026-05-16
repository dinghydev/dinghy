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

export const AwsRedshiftParameterGroupInputSchema = TfMetaSchema.extend({
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

export const AwsRedshiftParameterGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRedshiftParameterGroupInputProps =
  & z.input<typeof AwsRedshiftParameterGroupInputSchema>
  & NodeProps

export type AwsRedshiftParameterGroupOutputProps =
  & z.output<typeof AwsRedshiftParameterGroupOutputSchema>
  & z.output<typeof AwsRedshiftParameterGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_parameter_group

export function AwsRedshiftParameterGroup(
  props: Partial<AwsRedshiftParameterGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_parameter_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftParameterGroupInputSchema}
      _outputSchema={AwsRedshiftParameterGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftParameterGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftParameterGroupOutputProps>(
    AwsRedshiftParameterGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftParameterGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftParameterGroupOutputProps>(
    AwsRedshiftParameterGroup,
    idFilter,
    baseNode,
    optional,
  )
