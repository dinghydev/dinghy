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

export const AwsTransferSshKeyInputSchema = TfMetaSchema.extend({
  body: resolvableValue(z.string()),
  server_id: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsTransferSshKeyOutputSchema = z.object({
  ssh_key_id: z.string().optional(),
})

export type AwsTransferSshKeyInputProps =
  & z.input<typeof AwsTransferSshKeyInputSchema>
  & NodeProps

export type AwsTransferSshKeyOutputProps =
  & z.output<typeof AwsTransferSshKeyOutputSchema>
  & z.output<typeof AwsTransferSshKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_ssh_key

export function AwsTransferSshKey(props: Partial<AwsTransferSshKeyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_ssh_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTransferSshKeyInputSchema}
      _outputSchema={AwsTransferSshKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferSshKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTransferSshKeyOutputProps>(
    AwsTransferSshKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTransferSshKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTransferSshKeyOutputProps>(
    AwsTransferSshKey,
    idFilter,
    baseNode,
    optional,
  )
