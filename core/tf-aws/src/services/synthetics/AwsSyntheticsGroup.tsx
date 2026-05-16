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

export const AwsSyntheticsGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSyntheticsGroupOutputSchema = z.object({
  arn: z.string().optional(),
  group_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSyntheticsGroupInputProps =
  & z.input<typeof AwsSyntheticsGroupInputSchema>
  & NodeProps

export type AwsSyntheticsGroupOutputProps =
  & z.output<typeof AwsSyntheticsGroupOutputSchema>
  & z.output<typeof AwsSyntheticsGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/synthetics_group

export function AwsSyntheticsGroup(
  props: Partial<AwsSyntheticsGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_synthetics_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSyntheticsGroupInputSchema}
      _outputSchema={AwsSyntheticsGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsSyntheticsGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSyntheticsGroupOutputProps>(
    AwsSyntheticsGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSyntheticsGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSyntheticsGroupOutputProps>(
    AwsSyntheticsGroup,
    idFilter,
    baseNode,
    optional,
  )
