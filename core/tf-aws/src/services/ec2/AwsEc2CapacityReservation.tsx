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
  availability_zone: resolvableValue(z.string()),
  instance_count: resolvableValue(z.number()),
  instance_platform: resolvableValue(z.string()),
  instance_type: resolvableValue(z.string()),
  ebs_optimized: resolvableValue(z.boolean().optional()),
  end_date: resolvableValue(z.string().optional()),
  end_date_type: resolvableValue(z.string().optional()),
  ephemeral_storage: resolvableValue(z.boolean().optional()),
  instance_match_criteria: resolvableValue(z.string().optional()),
  outpost_arn: resolvableValue(z.string().optional()),
  placement_group_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tenancy: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_capacity_reservation

export function AwsEc2CapacityReservation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_capacity_reservation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2CapacityReservation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsEc2CapacityReservation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2CapacityReservations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsEc2CapacityReservation,
    idFilter,
    baseNode,
    optional,
  )
