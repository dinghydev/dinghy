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

export const InputSchema = z.object({
  connection_events: resolvableValue(z.string().array()),
  connection_notification_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  vpc_endpoint_id: resolvableValue(z.string().optional()),
  vpc_endpoint_service_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  notification_type: z.string().optional(),
  state: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_endpoint_connection_notification

export function AwsVpcEndpointConnectionNotification(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_connection_notification'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointConnectionNotification = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsVpcEndpointConnectionNotification,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcEndpointConnectionNotifications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsVpcEndpointConnectionNotification,
    idFilter,
    baseNode,
    optional,
  )
