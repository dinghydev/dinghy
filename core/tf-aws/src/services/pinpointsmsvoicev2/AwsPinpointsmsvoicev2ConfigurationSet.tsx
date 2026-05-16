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

export const AwsPinpointsmsvoicev2ConfigurationSetInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    default_message_type: resolvableValue(z.string().optional()),
    default_sender_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsPinpointsmsvoicev2ConfigurationSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsPinpointsmsvoicev2ConfigurationSetInputProps =
  & z.input<typeof AwsPinpointsmsvoicev2ConfigurationSetInputSchema>
  & NodeProps

export type AwsPinpointsmsvoicev2ConfigurationSetOutputProps =
  & z.output<typeof AwsPinpointsmsvoicev2ConfigurationSetOutputSchema>
  & z.output<typeof AwsPinpointsmsvoicev2ConfigurationSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpointsmsvoicev2_configuration_set

export function AwsPinpointsmsvoicev2ConfigurationSet(
  props: Partial<AwsPinpointsmsvoicev2ConfigurationSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpointsmsvoicev2_configuration_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPinpointsmsvoicev2ConfigurationSetInputSchema}
      _outputSchema={AwsPinpointsmsvoicev2ConfigurationSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointsmsvoicev2ConfigurationSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPinpointsmsvoicev2ConfigurationSetOutputProps>(
    AwsPinpointsmsvoicev2ConfigurationSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointsmsvoicev2ConfigurationSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPinpointsmsvoicev2ConfigurationSetOutputProps>(
    AwsPinpointsmsvoicev2ConfigurationSet,
    idFilter,
    baseNode,
    optional,
  )
