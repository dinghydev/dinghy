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
  capacity_duration_hours: resolvableValue(z.number()),
  instance_count: resolvableValue(z.number()),
  instance_type: resolvableValue(z.string()),
  end_date_range: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  start_date_range: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  availability_zone: z.string().optional(),
  capacity_block_offering_id: z.string().optional(),
  currency_code: z.string().optional(),
  tenancy: z.string().optional(),
  upfront_fee: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ec2_capacity_block_offering

export function DataAwsEc2CapacityBlockOffering(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_capacity_block_offering'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2CapacityBlockOffering = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsEc2CapacityBlockOffering,
    idFilter,
    baseNode,
    optional,
  )
