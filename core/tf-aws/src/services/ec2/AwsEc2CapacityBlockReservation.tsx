import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_capacity_block_reservation

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2CapacityBlockReservation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_capacity_block_reservation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2CapacityBlockReservation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEc2CapacityBlockReservation, node, id)

export const useAwsEc2CapacityBlockReservations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEc2CapacityBlockReservation, node, id)
