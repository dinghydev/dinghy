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

export const AwsLightsailLbAttachmentInputSchema = TfMetaSchema.extend({
  instance_name: resolvableValue(z.string()),
  lb_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLightsailLbAttachmentOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLightsailLbAttachmentInputProps =
  & z.input<typeof AwsLightsailLbAttachmentInputSchema>
  & NodeProps

export type AwsLightsailLbAttachmentOutputProps =
  & z.output<typeof AwsLightsailLbAttachmentOutputSchema>
  & z.output<typeof AwsLightsailLbAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_lb_attachment

export function AwsLightsailLbAttachment(
  props: Partial<AwsLightsailLbAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_lb_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailLbAttachmentInputSchema}
      _outputSchema={AwsLightsailLbAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailLbAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailLbAttachmentOutputProps>(
    AwsLightsailLbAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailLbAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailLbAttachmentOutputProps>(
    AwsLightsailLbAttachment,
    idFilter,
    baseNode,
    optional,
  )
