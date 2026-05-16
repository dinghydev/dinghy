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

export const AwsSsmcontactsContactChannelInputSchema = TfMetaSchema.extend({
  contact_id: resolvableValue(z.string()),
  delivery_address: resolvableValue(z.object({
    simple_address: z.string(),
  })),
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSsmcontactsContactChannelOutputSchema = z.object({
  activation_status: z.string().optional(),
  arn: z.string().optional(),
})

export const AwsSsmcontactsContactChannelImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSsmcontactsContactChannelInputProps =
  & z.input<typeof AwsSsmcontactsContactChannelInputSchema>
  & z.input<typeof AwsSsmcontactsContactChannelImportSchema>
  & NodeProps

export type AwsSsmcontactsContactChannelOutputProps =
  & z.output<typeof AwsSsmcontactsContactChannelOutputSchema>
  & z.output<typeof AwsSsmcontactsContactChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssmcontacts_contact_channel

export function AwsSsmcontactsContactChannel(
  props: Partial<AwsSsmcontactsContactChannelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssmcontacts_contact_channel'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmcontactsContactChannelInputSchema}
      _outputSchema={AwsSsmcontactsContactChannelOutputSchema}
      _importSchema={AwsSsmcontactsContactChannelImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmcontactsContactChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmcontactsContactChannelOutputProps>(
    AwsSsmcontactsContactChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmcontactsContactChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmcontactsContactChannelOutputProps>(
    AwsSsmcontactsContactChannel,
    idFilter,
    baseNode,
    optional,
  )
