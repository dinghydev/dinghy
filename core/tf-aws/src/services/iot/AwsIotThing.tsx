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

export const AwsIotThingInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  attributes: resolvableValue(z.record(z.string(), z.string()).optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  thing_type_name: resolvableValue(z.string().optional()),
})

export const AwsIotThingOutputSchema = z.object({
  arn: z.string().optional(),
  default_client_id: z.string().optional(),
  version: z.number().optional(),
})

export type AwsIotThingInputProps =
  & z.input<typeof AwsIotThingInputSchema>
  & NodeProps

export type AwsIotThingOutputProps =
  & z.output<typeof AwsIotThingOutputSchema>
  & z.output<typeof AwsIotThingInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_thing

export function AwsIotThing(props: Partial<AwsIotThingInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_thing'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotThingInputSchema}
      _outputSchema={AwsIotThingOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotThing = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotThingOutputProps>(
    AwsIotThing,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotThings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotThingOutputProps>(
    AwsIotThing,
    idFilter,
    baseNode,
    optional,
  )
