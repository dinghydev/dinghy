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
  thing_group_name: resolvableValue(z.string()),
  thing_name: resolvableValue(z.string()),
  override_dynamic_group: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iot_thing_group_membership

export function AwsIotThingGroupMembership(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_thing_group_membership'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIotThingGroupMembership = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsIotThingGroupMembership, idFilter, baseNode)

export const useAwsIotThingGroupMemberships = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsIotThingGroupMembership, idFilter, baseNode)
