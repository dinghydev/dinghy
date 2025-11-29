import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_subnet_cidr_reservation

export const InputSchema = z.object({
  cidr_block: resolvableValue(z.string()),
  reservation_type: resolvableValue(z.string()),
  subnet_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  owner_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2SubnetCidrReservation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_subnet_cidr_reservation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2SubnetCidrReservation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEc2SubnetCidrReservation, node, id)

export const useAwsEc2SubnetCidrReservations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEc2SubnetCidrReservation, node, id)
