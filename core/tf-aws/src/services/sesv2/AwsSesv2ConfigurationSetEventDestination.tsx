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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sesv2_configuration_set_event_destination

export function AwsSesv2ConfigurationSetEventDestination(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2ConfigurationSetEventDestination = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsSesv2ConfigurationSetEventDestination,
    idFilter,
    baseNode,
    optional,
  )
