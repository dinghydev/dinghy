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

export const AwsOpensearchInboundConnectionAccepterInputSchema = TfMetaSchema
  .extend({
    connection_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsOpensearchInboundConnectionAccepterOutputSchema = z.object({
  connection_status: z.string().optional(),
  id: z.string().optional(),
})

export type AwsOpensearchInboundConnectionAccepterInputProps =
  & z.input<typeof AwsOpensearchInboundConnectionAccepterInputSchema>
  & NodeProps

export type AwsOpensearchInboundConnectionAccepterOutputProps =
  & z.output<typeof AwsOpensearchInboundConnectionAccepterOutputSchema>
  & z.output<typeof AwsOpensearchInboundConnectionAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearch_inbound_connection_accepter

export function AwsOpensearchInboundConnectionAccepter(
  props: Partial<AwsOpensearchInboundConnectionAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearch_inbound_connection_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchInboundConnectionAccepterInputSchema}
      _outputSchema={AwsOpensearchInboundConnectionAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchInboundConnectionAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOpensearchInboundConnectionAccepterOutputProps>(
    AwsOpensearchInboundConnectionAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOpensearchInboundConnectionAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOpensearchInboundConnectionAccepterOutputProps>(
    AwsOpensearchInboundConnectionAccepter,
    idFilter,
    baseNode,
    optional,
  )
