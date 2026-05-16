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

export const AwsVpcEndpointConnectionNotificationInputSchema = TfMetaSchema
  .extend({
    connection_events: resolvableValue(z.string().array()),
    connection_notification_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    vpc_endpoint_id: resolvableValue(z.string().optional()),
    vpc_endpoint_service_id: resolvableValue(z.string().optional()),
  })

export const AwsVpcEndpointConnectionNotificationOutputSchema = z.object({
  id: z.string().optional(),
  notification_type: z.string().optional(),
  state: z.string().optional(),
})

export type AwsVpcEndpointConnectionNotificationInputProps =
  & z.input<typeof AwsVpcEndpointConnectionNotificationInputSchema>
  & NodeProps

export type AwsVpcEndpointConnectionNotificationOutputProps =
  & z.output<typeof AwsVpcEndpointConnectionNotificationOutputSchema>
  & z.output<typeof AwsVpcEndpointConnectionNotificationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_endpoint_connection_notification

export function AwsVpcEndpointConnectionNotification(
  props: Partial<AwsVpcEndpointConnectionNotificationInputProps>,
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
      _inputSchema={AwsVpcEndpointConnectionNotificationInputSchema}
      _outputSchema={AwsVpcEndpointConnectionNotificationOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointConnectionNotification = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcEndpointConnectionNotificationOutputProps>(
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
  useTypedNodes<AwsVpcEndpointConnectionNotificationOutputProps>(
    AwsVpcEndpointConnectionNotification,
    idFilter,
    baseNode,
    optional,
  )
