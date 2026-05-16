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

export const AwsSesv2ConfigurationSetEventDestinationInputSchema = TfMetaSchema
  .extend({
    configuration_set_name: resolvableValue(z.string()),
    event_destination: resolvableValue(z.object({
      enabled: z.boolean().optional(),
      matching_event_types: z.string().array(),
      cloud_watch_destination: z.object({
        dimension_configuration: z.object({
          default_dimension_value: z.string(),
          dimension_name: z.string(),
          dimension_value_source: z.string(),
        }).array(),
      }).optional(),
      event_bridge_destination: z.object({
        event_bus_arn: z.string(),
      }).optional(),
      kinesis_firehose_destination: z.object({
        delivery_stream_arn: z.string(),
        iam_role_arn: z.string(),
      }).optional(),
      pinpoint_destination: z.object({
        application_arn: z.string(),
      }).optional(),
      sns_destination: z.object({
        topic_arn: z.string(),
      }).optional(),
    })),
    event_destination_name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsSesv2ConfigurationSetEventDestinationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSesv2ConfigurationSetEventDestinationInputProps =
  & z.input<typeof AwsSesv2ConfigurationSetEventDestinationInputSchema>
  & NodeProps

export type AwsSesv2ConfigurationSetEventDestinationOutputProps =
  & z.output<typeof AwsSesv2ConfigurationSetEventDestinationOutputSchema>
  & z.output<typeof AwsSesv2ConfigurationSetEventDestinationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_configuration_set_event_destination

export function AwsSesv2ConfigurationSetEventDestination(
  props: Partial<AwsSesv2ConfigurationSetEventDestinationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_configuration_set_event_destination'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesv2ConfigurationSetEventDestinationInputSchema}
      _outputSchema={AwsSesv2ConfigurationSetEventDestinationOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2ConfigurationSetEventDestination = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesv2ConfigurationSetEventDestinationOutputProps>(
    AwsSesv2ConfigurationSetEventDestination,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesv2ConfigurationSetEventDestinations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesv2ConfigurationSetEventDestinationOutputProps>(
    AwsSesv2ConfigurationSetEventDestination,
    idFilter,
    baseNode,
    optional,
  )
