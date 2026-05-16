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

export const AwsAthenaCapacityReservationInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  target_dpus: resolvableValue(z.number()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsAthenaCapacityReservationOutputSchema = z.object({
  allocated_dpus: z.number().optional(),
  arn: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsAthenaCapacityReservationInputProps =
  & z.input<typeof AwsAthenaCapacityReservationInputSchema>
  & NodeProps

export type AwsAthenaCapacityReservationOutputProps =
  & z.output<typeof AwsAthenaCapacityReservationOutputSchema>
  & z.output<typeof AwsAthenaCapacityReservationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/athena_capacity_reservation

export function AwsAthenaCapacityReservation(
  props: Partial<AwsAthenaCapacityReservationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_athena_capacity_reservation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAthenaCapacityReservationInputSchema}
      _outputSchema={AwsAthenaCapacityReservationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAthenaCapacityReservation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAthenaCapacityReservationOutputProps>(
    AwsAthenaCapacityReservation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAthenaCapacityReservations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAthenaCapacityReservationOutputProps>(
    AwsAthenaCapacityReservation,
    idFilter,
    baseNode,
    optional,
  )
