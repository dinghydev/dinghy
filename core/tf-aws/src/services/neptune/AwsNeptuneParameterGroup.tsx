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

export const AwsNeptuneParameterGroupInputSchema = TfMetaSchema.extend({
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

export const AwsNeptuneParameterGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNeptuneParameterGroupInputProps =
  & z.input<typeof AwsNeptuneParameterGroupInputSchema>
  & NodeProps

export type AwsNeptuneParameterGroupOutputProps =
  & z.output<typeof AwsNeptuneParameterGroupOutputSchema>
  & z.output<typeof AwsNeptuneParameterGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_parameter_group

export function AwsNeptuneParameterGroup(
  props: Partial<AwsNeptuneParameterGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_neptune_parameter_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNeptuneParameterGroupInputSchema}
      _outputSchema={AwsNeptuneParameterGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsNeptuneParameterGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNeptuneParameterGroupOutputProps>(
    AwsNeptuneParameterGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNeptuneParameterGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNeptuneParameterGroupOutputProps>(
    AwsNeptuneParameterGroup,
    idFilter,
    baseNode,
    optional,
  )
