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

export const AwsIvschatRoomInputSchema = TfMetaSchema.extend({
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

export const AwsIvschatRoomOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsIvschatRoomImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsIvschatRoomInputProps =
  & z.input<typeof AwsIvschatRoomInputSchema>
  & z.input<typeof AwsIvschatRoomImportSchema>
  & NodeProps

export type AwsIvschatRoomOutputProps =
  & z.output<typeof AwsIvschatRoomOutputSchema>
  & z.output<typeof AwsIvschatRoomInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ivschat_room

export function AwsIvschatRoom(props: Partial<AwsIvschatRoomInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ivschat_room'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIvschatRoomInputSchema}
      _outputSchema={AwsIvschatRoomOutputSchema}
      _importSchema={AwsIvschatRoomImportSchema}
      {...props}
    />
  )
}

export const useAwsIvschatRoom = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIvschatRoomOutputProps>(
    AwsIvschatRoom,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIvschatRooms = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIvschatRoomOutputProps>(
    AwsIvschatRoom,
    idFilter,
    baseNode,
    optional,
  )
