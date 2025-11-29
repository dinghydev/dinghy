import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssmcontacts_contact_channel

export const InputSchema = z.object({
  activation_status: resolvableValue(z.string()),
  arn: resolvableValue(z.string()),
  contact_id: resolvableValue(z.string()),
  delivery_address: resolvableValue(z.object({
    simple_address: z.string(),
  })),
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSsmcontactsContactChannel(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssmcontacts_contact_channel'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmcontactsContactChannel = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsmcontactsContactChannel, node, id)

export const useAwsSsmcontactsContactChannels = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSsmcontactsContactChannel, node, id)
