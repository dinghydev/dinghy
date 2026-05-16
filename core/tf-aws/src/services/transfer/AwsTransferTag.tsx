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

export const AwsTransferTagInputSchema = TfMetaSchema.extend({
  __key: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  value: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsTransferTagOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsTransferTagInputProps =
  & z.input<typeof AwsTransferTagInputSchema>
  & NodeProps

export type AwsTransferTagOutputProps =
  & z.output<typeof AwsTransferTagOutputSchema>
  & z.output<typeof AwsTransferTagInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_tag

export function AwsTransferTag(props: Partial<AwsTransferTagInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_tag'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTransferTagInputSchema}
      _outputSchema={AwsTransferTagOutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferTag = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTransferTagOutputProps>(
    AwsTransferTag,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTransferTags = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTransferTagOutputProps>(
    AwsTransferTag,
    idFilter,
    baseNode,
    optional,
  )
