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

export const AwsAcmCertificateValidationInputSchema = TfMetaSchema.extend({
  certificate_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
  validation_record_fqdns: resolvableValue(z.string().array().optional()),
})

export const AwsAcmCertificateValidationOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsAcmCertificateValidationImportSchema = z.object({
  certificate_arn: resolvableValue(z.string()),
})

export type AwsAcmCertificateValidationInputProps =
  & z.input<typeof AwsAcmCertificateValidationInputSchema>
  & z.input<typeof AwsAcmCertificateValidationImportSchema>
  & NodeProps

export type AwsAcmCertificateValidationOutputProps =
  & z.output<typeof AwsAcmCertificateValidationOutputSchema>
  & z.output<typeof AwsAcmCertificateValidationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/acm_certificate_validation

export function AwsAcmCertificateValidation(
  props: Partial<AwsAcmCertificateValidationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_acm_certificate_validation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAcmCertificateValidationInputSchema}
      _outputSchema={AwsAcmCertificateValidationOutputSchema}
      _importSchema={AwsAcmCertificateValidationImportSchema}
      {...props}
    />
  )
}

export const useAwsAcmCertificateValidation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAcmCertificateValidationOutputProps>(
    AwsAcmCertificateValidation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAcmCertificateValidations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAcmCertificateValidationOutputProps>(
    AwsAcmCertificateValidation,
    idFilter,
    baseNode,
    optional,
  )
