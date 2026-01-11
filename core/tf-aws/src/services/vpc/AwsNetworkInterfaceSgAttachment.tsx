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
  network_interface_id: resolvableValue(z.string()),
  security_group_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/network_interface_sg_attachment

export function AwsNetworkInterfaceSgAttachment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_network_interface_sg_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkInterfaceSgAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsNetworkInterfaceSgAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkInterfaceSgAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsNetworkInterfaceSgAttachment,
    idFilter,
    baseNode,
    optional,
  )
