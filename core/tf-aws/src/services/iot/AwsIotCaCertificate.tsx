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

export const AwsIotCaCertificateInputSchema = TfMetaSchema.extend({
  active: resolvableValue(z.boolean()),
  allow_auto_registration: resolvableValue(z.boolean()),
  ca_certificate_pem: resolvableValue(z.string()),
  certificate_mode: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  registration_config: resolvableValue(
    z.object({
      role_arn: z.string().optional(),
      template_body: z.string().optional(),
      template_name: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  verification_certificate_pem: resolvableValue(z.string().optional()),
})

export const AwsIotCaCertificateOutputSchema = z.object({
  arn: z.string().optional(),
  customer_version: z.number().optional(),
  generation_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  validity: z.object({
    not_after: z.string(),
    not_before: z.string(),
  }).array().optional(),
})

export type AwsIotCaCertificateInputProps =
  & z.input<typeof AwsIotCaCertificateInputSchema>
  & NodeProps

export type AwsIotCaCertificateOutputProps =
  & z.output<typeof AwsIotCaCertificateOutputSchema>
  & z.output<typeof AwsIotCaCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_ca_certificate

export function AwsIotCaCertificate(
  props: Partial<AwsIotCaCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_ca_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotCaCertificateInputSchema}
      _outputSchema={AwsIotCaCertificateOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotCaCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotCaCertificateOutputProps>(
    AwsIotCaCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotCaCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotCaCertificateOutputProps>(
    AwsIotCaCertificate,
    idFilter,
    baseNode,
    optional,
  )
