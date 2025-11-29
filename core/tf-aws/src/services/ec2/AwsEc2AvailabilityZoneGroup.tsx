import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_availability_zone_group

export const InputSchema = z.object({
  group_name: resolvableValue(z.string()),
  opt_in_status: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2AvailabilityZoneGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_availability_zone_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2AvailabilityZoneGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEc2AvailabilityZoneGroup, node, id)

export const useAwsEc2AvailabilityZoneGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEc2AvailabilityZoneGroup, node, id)
