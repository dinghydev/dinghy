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

export const AwsLightsailLbCertificateInputSchema = TfMetaSchema.extend({
  lb_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  subject_alternative_names: resolvableValue(z.string().array().optional()),
})

export const AwsLightsailLbCertificateOutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  domain_validation_records: z.set(z.object({
    domain_name: z.string(),
    resource_record_name: z.string(),
    resource_record_type: z.string(),
    resource_record_value: z.string(),
  })).optional(),
  id: z.string().optional(),
  support_code: z.string().optional(),
})

export type AwsLightsailLbCertificateInputProps =
  & z.input<typeof AwsLightsailLbCertificateInputSchema>
  & NodeProps

export type AwsLightsailLbCertificateOutputProps =
  & z.output<typeof AwsLightsailLbCertificateOutputSchema>
  & z.output<typeof AwsLightsailLbCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_lb_certificate

export function AwsLightsailLbCertificate(
  props: Partial<AwsLightsailLbCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_lb_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailLbCertificateInputSchema}
      _outputSchema={AwsLightsailLbCertificateOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailLbCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailLbCertificateOutputProps>(
    AwsLightsailLbCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailLbCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailLbCertificateOutputProps>(
    AwsLightsailLbCertificate,
    idFilter,
    baseNode,
    optional,
  )
