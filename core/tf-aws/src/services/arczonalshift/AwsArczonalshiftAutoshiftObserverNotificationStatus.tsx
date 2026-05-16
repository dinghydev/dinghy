import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsArczonalshiftAutoshiftObserverNotificationStatusInputSchema =
  TfMetaSchema.extend({
    status: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsArczonalshiftAutoshiftObserverNotificationStatusOutputSchema = z
  .object({
    id: z.string().optional(),
  })

export type AwsArczonalshiftAutoshiftObserverNotificationStatusInputProps =
  & z.input<
    typeof AwsArczonalshiftAutoshiftObserverNotificationStatusInputSchema
  >
  & NodeProps

export type AwsArczonalshiftAutoshiftObserverNotificationStatusOutputProps =
  & z.output<
    typeof AwsArczonalshiftAutoshiftObserverNotificationStatusOutputSchema
  >
  & z.output<
    typeof AwsArczonalshiftAutoshiftObserverNotificationStatusInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/arczonalshift_autoshift_observer_notification_status

export function AwsArczonalshiftAutoshiftObserverNotificationStatus(
  props: Partial<AwsArczonalshiftAutoshiftObserverNotificationStatusInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_arczonalshift_autoshift_observer_notification_status'
      _category='resource'
      _title={_title}
      _inputSchema={AwsArczonalshiftAutoshiftObserverNotificationStatusInputSchema}
      _outputSchema={AwsArczonalshiftAutoshiftObserverNotificationStatusOutputSchema}
      {...props}
    />
  )
}

export const useAwsArczonalshiftAutoshiftObserverNotificationStatuss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsArczonalshiftAutoshiftObserverNotificationStatusOutputProps>(
    AwsArczonalshiftAutoshiftObserverNotificationStatus,
    idFilter,
    baseNode,
    optional,
  )
