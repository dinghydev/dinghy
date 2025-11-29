import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/connect_hours_of_operation

export const InputSchema = z.object({
  config: resolvableValue(
    z.object({
      day: z.string(),
    }).array(),
  ),
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  time_zone: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  hours_of_operation_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsConnectHoursOfOperation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_hours_of_operation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectHoursOfOperation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsConnectHoursOfOperation, node, id)

export const useAwsConnectHoursOfOperations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsConnectHoursOfOperation, node, id)
