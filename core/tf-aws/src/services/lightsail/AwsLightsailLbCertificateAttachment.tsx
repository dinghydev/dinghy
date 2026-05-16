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

export const AwsLightsailLbCertificateAttachmentInputSchema = TfMetaSchema
  .extend({
    certificate_name: resolvableValue(z.string()),
    lb_name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsLightsailLbCertificateAttachmentOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLightsailLbCertificateAttachmentInputProps =
  & z.input<typeof AwsLightsailLbCertificateAttachmentInputSchema>
  & NodeProps

export type AwsLightsailLbCertificateAttachmentOutputProps =
  & z.output<typeof AwsLightsailLbCertificateAttachmentOutputSchema>
  & z.output<typeof AwsLightsailLbCertificateAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_lb_certificate_attachment

export function AwsLightsailLbCertificateAttachment(
  props: Partial<AwsLightsailLbCertificateAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_lb_certificate_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailLbCertificateAttachmentInputSchema}
      _outputSchema={AwsLightsailLbCertificateAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailLbCertificateAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailLbCertificateAttachmentOutputProps>(
    AwsLightsailLbCertificateAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailLbCertificateAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailLbCertificateAttachmentOutputProps>(
    AwsLightsailLbCertificateAttachment,
    idFilter,
    baseNode,
    optional,
  )
