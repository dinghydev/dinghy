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

export const AwsIotPolicyAttachmentInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  target: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsIotPolicyAttachmentOutputSchema = z.object({})

export type AwsIotPolicyAttachmentInputProps =
  & z.input<typeof AwsIotPolicyAttachmentInputSchema>
  & NodeProps

export type AwsIotPolicyAttachmentOutputProps =
  & z.output<typeof AwsIotPolicyAttachmentOutputSchema>
  & z.output<typeof AwsIotPolicyAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_policy_attachment

export function AwsIotPolicyAttachment(
  props: Partial<AwsIotPolicyAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_policy_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotPolicyAttachmentInputSchema}
      _outputSchema={AwsIotPolicyAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotPolicyAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotPolicyAttachmentOutputProps>(
    AwsIotPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotPolicyAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotPolicyAttachmentOutputProps>(
    AwsIotPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )
