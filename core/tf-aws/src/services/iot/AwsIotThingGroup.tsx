import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iot_thing_group

export const InputSchema = z.object({
  metadata: resolvableValue(
    z.object({
      creation_date: z.string(),
      parent_group_name: z.string(),
      root_to_parent_groups: z.object({
        group_arn: z.string(),
        group_name: z.string(),
      }).array(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  parent_group_name: resolvableValue(z.string().optional()),
  properties: resolvableValue(
    z.object({
      description: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  version: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIotThingGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_thing_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIotThingGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIotThingGroup, node, id)

export const useAwsIotThingGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIotThingGroup, node, id)
