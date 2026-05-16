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

export const AwsIotThingTypeInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  deprecated: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  properties: resolvableValue(
    z.object({
      description: z.string().optional(),
      searchable_attributes: z.string().array().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsIotThingTypeOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsIotThingTypeInputProps =
  & z.input<typeof AwsIotThingTypeInputSchema>
  & NodeProps

export type AwsIotThingTypeOutputProps =
  & z.output<typeof AwsIotThingTypeOutputSchema>
  & z.output<typeof AwsIotThingTypeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_thing_type

export function AwsIotThingType(props: Partial<AwsIotThingTypeInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_thing_type'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotThingTypeInputSchema}
      _outputSchema={AwsIotThingTypeOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotThingType = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotThingTypeOutputProps>(
    AwsIotThingType,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotThingTypes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotThingTypeOutputProps>(
    AwsIotThingType,
    idFilter,
    baseNode,
    optional,
  )
