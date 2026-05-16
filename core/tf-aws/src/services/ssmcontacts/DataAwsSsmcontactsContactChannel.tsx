import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsmcontactsContactChannel } from './AwsSsmcontactsContactChannel.tsx'

export const DataAwsSsmcontactsContactChannelInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSsmcontactsContactChannelOutputSchema = z.object({
  activation_status: z.string().optional(),
  contact_id: z.string().optional(),
  delivery_address: z.object({
    simple_address: z.string(),
  }).array().optional(),
  name: z.string().optional(),
  type: z.string().optional(),
})

export type DataAwsSsmcontactsContactChannelInputProps =
  & z.input<typeof DataAwsSsmcontactsContactChannelInputSchema>
  & NodeProps

export type DataAwsSsmcontactsContactChannelOutputProps =
  & z.output<typeof DataAwsSsmcontactsContactChannelOutputSchema>
  & z.output<typeof DataAwsSsmcontactsContactChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssmcontacts_contact_channel

export function DataAwsSsmcontactsContactChannel(
  props: Partial<DataAwsSsmcontactsContactChannelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSsmcontactsContactChannel
      _type='aws_ssmcontacts_contact_channel'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsmcontactsContactChannelInputSchema}
      _outputSchema={DataAwsSsmcontactsContactChannelOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmcontactsContactChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSsmcontactsContactChannelOutputProps>(
    DataAwsSsmcontactsContactChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSsmcontactsContactChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsmcontactsContactChannelOutputProps>(
    DataAwsSsmcontactsContactChannel,
    idFilter,
    baseNode,
    optional,
  )
