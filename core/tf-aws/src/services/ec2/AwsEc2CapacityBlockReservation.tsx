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

export const AwsEc2CapacityBlockReservationInputSchema = TfMetaSchema.extend({
  capacity_block_offering_id: resolvableValue(z.string()),
  instance_platform: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEc2CapacityBlockReservationOutputSchema = z.object({
  arn: z.string().optional(),
  availability_zone: z.string().optional(),
  created_date: z.string().optional(),
  ebs_optimized: z.boolean().optional(),
  end_date: z.string().optional(),
  end_date_type: z.string().optional(),
  id: z.string().optional(),
  instance_count: z.number().optional(),
  instance_type: z.string().optional(),
  outpost_arn: z.string().optional(),
  placement_group_arn: z.string().optional(),
  reservation_type: z.string().optional(),
  start_date: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  tenancy: z.string().optional(),
})

export type AwsEc2CapacityBlockReservationInputProps =
  & z.input<typeof AwsEc2CapacityBlockReservationInputSchema>
  & NodeProps

export type AwsEc2CapacityBlockReservationOutputProps =
  & z.output<typeof AwsEc2CapacityBlockReservationOutputSchema>
  & z.output<typeof AwsEc2CapacityBlockReservationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_capacity_block_reservation

export function AwsEc2CapacityBlockReservation(
  props: Partial<AwsEc2CapacityBlockReservationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_capacity_block_reservation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2CapacityBlockReservationInputSchema}
      _outputSchema={AwsEc2CapacityBlockReservationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2CapacityBlockReservation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2CapacityBlockReservationOutputProps>(
    AwsEc2CapacityBlockReservation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2CapacityBlockReservations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2CapacityBlockReservationOutputProps>(
    AwsEc2CapacityBlockReservation,
    idFilter,
    baseNode,
    optional,
  )
