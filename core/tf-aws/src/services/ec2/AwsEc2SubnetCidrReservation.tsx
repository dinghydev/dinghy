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

export const AwsEc2SubnetCidrReservationInputSchema = TfMetaSchema.extend({
  cidr_block: resolvableValue(z.string()),
  reservation_type: resolvableValue(z.string()),
  subnet_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEc2SubnetCidrReservationOutputSchema = z.object({
  id: z.string().optional(),
  owner_id: z.string().optional(),
})

export type AwsEc2SubnetCidrReservationInputProps =
  & z.input<typeof AwsEc2SubnetCidrReservationInputSchema>
  & NodeProps

export type AwsEc2SubnetCidrReservationOutputProps =
  & z.output<typeof AwsEc2SubnetCidrReservationOutputSchema>
  & z.output<typeof AwsEc2SubnetCidrReservationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_subnet_cidr_reservation

export function AwsEc2SubnetCidrReservation(
  props: Partial<AwsEc2SubnetCidrReservationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_subnet_cidr_reservation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2SubnetCidrReservationInputSchema}
      _outputSchema={AwsEc2SubnetCidrReservationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2SubnetCidrReservation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2SubnetCidrReservationOutputProps>(
    AwsEc2SubnetCidrReservation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2SubnetCidrReservations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2SubnetCidrReservationOutputProps>(
    AwsEc2SubnetCidrReservation,
    idFilter,
    baseNode,
    optional,
  )
