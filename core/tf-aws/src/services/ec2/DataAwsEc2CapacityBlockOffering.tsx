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

export const DataAwsEc2CapacityBlockOfferingInputSchema = TfMetaSchema.extend({
  capacity_duration_hours: resolvableValue(z.number()),
  instance_count: resolvableValue(z.number()),
  instance_type: resolvableValue(z.string()),
  end_date_range: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  start_date_range: resolvableValue(z.string().optional()),
})

export const DataAwsEc2CapacityBlockOfferingOutputSchema = z.object({
  availability_zone: z.string().optional(),
  capacity_block_offering_id: z.string().optional(),
  currency_code: z.string().optional(),
  tenancy: z.string().optional(),
  upfront_fee: z.string().optional(),
})

export type DataAwsEc2CapacityBlockOfferingInputProps =
  & z.input<typeof DataAwsEc2CapacityBlockOfferingInputSchema>
  & NodeProps

export type DataAwsEc2CapacityBlockOfferingOutputProps =
  & z.output<typeof DataAwsEc2CapacityBlockOfferingOutputSchema>
  & z.output<typeof DataAwsEc2CapacityBlockOfferingInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_capacity_block_offering

export function DataAwsEc2CapacityBlockOffering(
  props: Partial<DataAwsEc2CapacityBlockOfferingInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_capacity_block_offering'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2CapacityBlockOfferingInputSchema}
      _outputSchema={DataAwsEc2CapacityBlockOfferingOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2CapacityBlockOffering = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2CapacityBlockOfferingOutputProps>(
    DataAwsEc2CapacityBlockOffering,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2CapacityBlockOfferings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2CapacityBlockOfferingOutputProps>(
    DataAwsEc2CapacityBlockOffering,
    idFilter,
    baseNode,
    optional,
  )
