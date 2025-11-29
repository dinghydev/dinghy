import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_lb_certificate_attachment

export const InputSchema = z.object({
  certificate_name: resolvableValue(z.string()),
  lb_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLightsailLbCertificateAttachment(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_lb_certificate_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailLbCertificateAttachment = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsLightsailLbCertificateAttachment, node, id)

export const useAwsLightsailLbCertificateAttachments = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsLightsailLbCertificateAttachment, node, id)
