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

export const AwsElbAttachmentInputSchema = TfMetaSchema.extend({
  elb: resolvableValue(z.string()),
  instance: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsElbAttachmentOutputSchema = z.object({})

export type AwsElbAttachmentInputProps =
  & z.input<typeof AwsElbAttachmentInputSchema>
  & NodeProps

export type AwsElbAttachmentOutputProps =
  & z.output<typeof AwsElbAttachmentOutputSchema>
  & z.output<typeof AwsElbAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/elb_attachment

export function AwsElbAttachment(props: Partial<AwsElbAttachmentInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elb_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsElbAttachmentInputSchema}
      _outputSchema={AwsElbAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsElbAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsElbAttachmentOutputProps>(
    AwsElbAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElbAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsElbAttachmentOutputProps>(
    AwsElbAttachment,
    idFilter,
    baseNode,
    optional,
  )
