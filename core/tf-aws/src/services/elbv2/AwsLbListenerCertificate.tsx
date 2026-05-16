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

export const AwsLbListenerCertificateInputSchema = TfMetaSchema.extend({
  certificate_arn: resolvableValue(z.string()),
  listener_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLbListenerCertificateOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLbListenerCertificateInputProps =
  & z.input<typeof AwsLbListenerCertificateInputSchema>
  & NodeProps

export type AwsLbListenerCertificateOutputProps =
  & z.output<typeof AwsLbListenerCertificateOutputSchema>
  & z.output<typeof AwsLbListenerCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lb_listener_certificate

export function AwsLbListenerCertificate(
  props: Partial<AwsLbListenerCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_listener_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLbListenerCertificateInputSchema}
      _outputSchema={AwsLbListenerCertificateOutputSchema}
      {...props}
    />
  )
}

export const useAwsLbListenerCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLbListenerCertificateOutputProps>(
    AwsLbListenerCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLbListenerCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLbListenerCertificateOutputProps>(
    AwsLbListenerCertificate,
    idFilter,
    baseNode,
    optional,
  )
