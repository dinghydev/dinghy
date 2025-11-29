import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssmcontacts_rotation

export const InputSchema = z.object({
  contact_ids: resolvableValue(z.string().array()),
  id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  time_zone_id: resolvableValue(z.string()),
  recurrence: resolvableValue(
    z.object({
      number_of_on_calls: z.number(),
      recurrence_multiplier: z.number(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  start_time: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSsmcontactsRotation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssmcontacts_rotation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmcontactsRotation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsmcontactsRotation, node, id)

export const useAwsSsmcontactsRotations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSsmcontactsRotation, node, id)
