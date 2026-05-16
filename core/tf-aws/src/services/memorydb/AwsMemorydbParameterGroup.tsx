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

export const AwsMemorydbParameterGroupInputSchema = TfMetaSchema.extend({
  family: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  parameter: resolvableValue(
    z.object({
      name: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsMemorydbParameterGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsMemorydbParameterGroupInputProps =
  & z.input<typeof AwsMemorydbParameterGroupInputSchema>
  & NodeProps

export type AwsMemorydbParameterGroupOutputProps =
  & z.output<typeof AwsMemorydbParameterGroupOutputSchema>
  & z.output<typeof AwsMemorydbParameterGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/memorydb_parameter_group

export function AwsMemorydbParameterGroup(
  props: Partial<AwsMemorydbParameterGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_memorydb_parameter_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMemorydbParameterGroupInputSchema}
      _outputSchema={AwsMemorydbParameterGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsMemorydbParameterGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMemorydbParameterGroupOutputProps>(
    AwsMemorydbParameterGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMemorydbParameterGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMemorydbParameterGroupOutputProps>(
    AwsMemorydbParameterGroup,
    idFilter,
    baseNode,
    optional,
  )
