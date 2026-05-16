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

export const AwsIotThingGroupMembershipInputSchema = TfMetaSchema.extend({
  thing_group_name: resolvableValue(z.string()),
  thing_name: resolvableValue(z.string()),
  override_dynamic_group: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsIotThingGroupMembershipOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsIotThingGroupMembershipInputProps =
  & z.input<typeof AwsIotThingGroupMembershipInputSchema>
  & NodeProps

export type AwsIotThingGroupMembershipOutputProps =
  & z.output<typeof AwsIotThingGroupMembershipOutputSchema>
  & z.output<typeof AwsIotThingGroupMembershipInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_thing_group_membership

export function AwsIotThingGroupMembership(
  props: Partial<AwsIotThingGroupMembershipInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_thing_group_membership'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotThingGroupMembershipInputSchema}
      _outputSchema={AwsIotThingGroupMembershipOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotThingGroupMembership = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotThingGroupMembershipOutputProps>(
    AwsIotThingGroupMembership,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotThingGroupMemberships = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotThingGroupMembershipOutputProps>(
    AwsIotThingGroupMembership,
    idFilter,
    baseNode,
    optional,
  )
