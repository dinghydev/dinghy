import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsMqBrokerInstanceTypeOfferingsInputSchema = TfMetaSchema
  .extend({
    engine_type: resolvableValue(z.string().optional()),
    host_instance_type: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    storage_type: resolvableValue(z.string().optional()),
  })

export const DataAwsMqBrokerInstanceTypeOfferingsOutputSchema = z.object({
  broker_instance_options: z.object({
    availability_zones: z.set(z.object({
      name: z.string(),
    })),
    engine_type: z.string(),
    host_instance_type: z.string(),
    storage_type: z.string(),
    supported_deployment_modes: z.set(z.string()),
    supported_engine_versions: z.string().array(),
  }).array().optional(),
})

export type DataAwsMqBrokerInstanceTypeOfferingsInputProps =
  & z.input<typeof DataAwsMqBrokerInstanceTypeOfferingsInputSchema>
  & NodeProps

export type DataAwsMqBrokerInstanceTypeOfferingsOutputProps =
  & z.output<typeof DataAwsMqBrokerInstanceTypeOfferingsOutputSchema>
  & z.output<typeof DataAwsMqBrokerInstanceTypeOfferingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/mq_broker_instance_type_offerings

export function DataAwsMqBrokerInstanceTypeOfferings(
  props: Partial<DataAwsMqBrokerInstanceTypeOfferingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_mq_broker_instance_type_offerings'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMqBrokerInstanceTypeOfferingsInputSchema}
      _outputSchema={DataAwsMqBrokerInstanceTypeOfferingsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsMqBrokerInstanceTypeOfferingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMqBrokerInstanceTypeOfferingsOutputProps>(
    DataAwsMqBrokerInstanceTypeOfferings,
    idFilter,
    baseNode,
    optional,
  )
