import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iot_thing

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  attributes: resolvableValue(z.record(z.string(), z.string()).optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  thing_type_name: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  default_client_id: z.string().optional(),
  version: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIotThing(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_thing'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIotThing = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIotThing, node, id)

export const useAwsIotThings = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIotThing, node, id)
