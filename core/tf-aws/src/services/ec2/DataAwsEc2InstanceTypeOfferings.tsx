import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2InstanceTypeOfferingsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  location_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsEc2InstanceTypeOfferingsOutputSchema = z.object({
  id: z.string().optional(),
  instance_types: z.string().array().optional(),
  location_types: z.string().array().optional(),
  locations: z.string().array().optional(),
})

export type DataAwsEc2InstanceTypeOfferingsInputProps =
  & z.input<typeof DataAwsEc2InstanceTypeOfferingsInputSchema>
  & NodeProps

export type DataAwsEc2InstanceTypeOfferingsOutputProps =
  & z.output<typeof DataAwsEc2InstanceTypeOfferingsOutputSchema>
  & z.output<typeof DataAwsEc2InstanceTypeOfferingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_instance_type_offerings

export function DataAwsEc2InstanceTypeOfferings(
  props: Partial<DataAwsEc2InstanceTypeOfferingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_instance_type_offerings'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2InstanceTypeOfferingsInputSchema}
      _outputSchema={DataAwsEc2InstanceTypeOfferingsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2InstanceTypeOfferingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2InstanceTypeOfferingsOutputProps>(
    DataAwsEc2InstanceTypeOfferings,
    idFilter,
    baseNode,
    optional,
  )
