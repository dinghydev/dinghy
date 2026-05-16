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

export const AwsDaxParameterGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  parameters: resolvableValue(
    z.object({
      name: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const AwsDaxParameterGroupOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsDaxParameterGroupInputProps =
  & z.input<typeof AwsDaxParameterGroupInputSchema>
  & NodeProps

export type AwsDaxParameterGroupOutputProps =
  & z.output<typeof AwsDaxParameterGroupOutputSchema>
  & z.output<typeof AwsDaxParameterGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dax_parameter_group

export function AwsDaxParameterGroup(
  props: Partial<AwsDaxParameterGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dax_parameter_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDaxParameterGroupInputSchema}
      _outputSchema={AwsDaxParameterGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsDaxParameterGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDaxParameterGroupOutputProps>(
    AwsDaxParameterGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDaxParameterGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDaxParameterGroupOutputProps>(
    AwsDaxParameterGroup,
    idFilter,
    baseNode,
    optional,
  )
