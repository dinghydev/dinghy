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

export const AwsTransferHostKeyInputSchema = TfMetaSchema.extend({
  server_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  host_key_body: resolvableValue(z.string().optional()),
  host_key_body_wo: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsTransferHostKeyOutputSchema = z.object({
  arn: z.string().optional(),
  host_key_fingerprint: z.string().optional(),
  host_key_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsTransferHostKeyInputProps =
  & z.input<typeof AwsTransferHostKeyInputSchema>
  & NodeProps

export type AwsTransferHostKeyOutputProps =
  & z.output<typeof AwsTransferHostKeyOutputSchema>
  & z.output<typeof AwsTransferHostKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_host_key

export function AwsTransferHostKey(
  props: Partial<AwsTransferHostKeyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_host_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTransferHostKeyInputSchema}
      _outputSchema={AwsTransferHostKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferHostKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTransferHostKeyOutputProps>(
    AwsTransferHostKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTransferHostKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTransferHostKeyOutputProps>(
    AwsTransferHostKey,
    idFilter,
    baseNode,
    optional,
  )
