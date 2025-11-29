import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ivschat_room

export const InputSchema = z.object({
  logging_configuration_identifiers: resolvableValue(
    z.string().array().optional(),
  ),
  maximum_message_length: resolvableValue(z.number().optional()),
  maximum_message_rate_per_second: resolvableValue(z.number().optional()),
  message_review_handler: resolvableValue(
    z.object({
      fallback_result: z.string().optional(),
      uri: z.string().optional(),
    }).optional(),
  ),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
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

export function AwsIvschatRoom(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ivschat_room'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsIvschatRoom = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIvschatRoom, node, id)

export const useAwsIvschatRooms = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIvschatRoom, node, id)
