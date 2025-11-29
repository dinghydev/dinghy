import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iot_thing_type

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  deprecated: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  properties: resolvableValue(
    z.object({
      description: z.string().optional(),
      searchable_attributes: z.string().array().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIotThingType(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_thing_type'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIotThingType = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIotThingType, node, id)

export const useAwsIotThingTypes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIotThingType, node, id)
