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

export const AwsDbParameterGroupInputSchema = TfMetaSchema.extend({
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
  skip_destroy: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDbParameterGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDbParameterGroupInputProps =
  & z.input<typeof AwsDbParameterGroupInputSchema>
  & NodeProps

export type AwsDbParameterGroupOutputProps =
  & z.output<typeof AwsDbParameterGroupOutputSchema>
  & z.output<typeof AwsDbParameterGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/db_parameter_group

export function AwsDbParameterGroup(
  props: Partial<AwsDbParameterGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_parameter_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDbParameterGroupInputSchema}
      _outputSchema={AwsDbParameterGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsDbParameterGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDbParameterGroupOutputProps>(
    AwsDbParameterGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDbParameterGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDbParameterGroupOutputProps>(
    AwsDbParameterGroup,
    idFilter,
    baseNode,
    optional,
  )
