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

export const DataAwsEc2SpotPriceInputSchema = TfMetaSchema.extend({
  availability_zone: resolvableValue(z.string().optional()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  instance_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsEc2SpotPriceOutputSchema = z.object({
  id: z.string().optional(),
  spot_price: z.string().optional(),
  spot_price_timestamp: z.string().optional(),
})

export type DataAwsEc2SpotPriceInputProps =
  & z.input<typeof DataAwsEc2SpotPriceInputSchema>
  & NodeProps

export type DataAwsEc2SpotPriceOutputProps =
  & z.output<typeof DataAwsEc2SpotPriceOutputSchema>
  & z.output<typeof DataAwsEc2SpotPriceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_spot_price

export function DataAwsEc2SpotPrice(
  props: Partial<DataAwsEc2SpotPriceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_spot_price'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2SpotPriceInputSchema}
      _outputSchema={DataAwsEc2SpotPriceOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2SpotPrice = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2SpotPriceOutputProps>(
    DataAwsEc2SpotPrice,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2SpotPrices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2SpotPriceOutputProps>(
    DataAwsEc2SpotPrice,
    idFilter,
    baseNode,
    optional,
  )
