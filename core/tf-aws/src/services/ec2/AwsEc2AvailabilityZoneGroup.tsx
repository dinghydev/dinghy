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

export const AwsEc2AvailabilityZoneGroupInputSchema = TfMetaSchema.extend({
  group_name: resolvableValue(z.string()),
  opt_in_status: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEc2AvailabilityZoneGroupOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEc2AvailabilityZoneGroupInputProps =
  & z.input<typeof AwsEc2AvailabilityZoneGroupInputSchema>
  & NodeProps

export type AwsEc2AvailabilityZoneGroupOutputProps =
  & z.output<typeof AwsEc2AvailabilityZoneGroupOutputSchema>
  & z.output<typeof AwsEc2AvailabilityZoneGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_availability_zone_group

export function AwsEc2AvailabilityZoneGroup(
  props: Partial<AwsEc2AvailabilityZoneGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_availability_zone_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2AvailabilityZoneGroupInputSchema}
      _outputSchema={AwsEc2AvailabilityZoneGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2AvailabilityZoneGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2AvailabilityZoneGroupOutputProps>(
    AwsEc2AvailabilityZoneGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2AvailabilityZoneGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2AvailabilityZoneGroupOutputProps>(
    AwsEc2AvailabilityZoneGroup,
    idFilter,
    baseNode,
    optional,
  )
