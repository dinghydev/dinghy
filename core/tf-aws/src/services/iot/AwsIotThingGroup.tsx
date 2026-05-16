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

export const AwsIotThingGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  parent_group_name: resolvableValue(z.string().optional()),
  properties: resolvableValue(
    z.object({
      description: z.string().optional(),
      attribute_payload: z.object({
        attributes: z.record(z.string(), z.string()).optional(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsIotThingGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  metadata: z.object({
    creation_date: z.string(),
    parent_group_name: z.string(),
    root_to_parent_groups: z.object({
      group_arn: z.string(),
      group_name: z.string(),
    }).array(),
  }).array().optional(),
  version: z.number().optional(),
})

export type AwsIotThingGroupInputProps =
  & z.input<typeof AwsIotThingGroupInputSchema>
  & NodeProps

export type AwsIotThingGroupOutputProps =
  & z.output<typeof AwsIotThingGroupOutputSchema>
  & z.output<typeof AwsIotThingGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_thing_group

export function AwsIotThingGroup(props: Partial<AwsIotThingGroupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_thing_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotThingGroupInputSchema}
      _outputSchema={AwsIotThingGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotThingGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotThingGroupOutputProps>(
    AwsIotThingGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotThingGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotThingGroupOutputProps>(
    AwsIotThingGroup,
    idFilter,
    baseNode,
    optional,
  )
