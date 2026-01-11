import {
  camelCaseToWords,
  extendStyle,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { CERTIFICATE } from '@dinghy/diagrams/entitiesAwsInternetOfThings'

export const InputSchema = z.object({
  certificate_authority_arn: resolvableValue(z.string().optional()),
  certificate_body: resolvableValue(z.string().optional()),
  certificate_chain: resolvableValue(z.string().optional()),
  domain_name: resolvableValue(z.string().optional()),
  early_renewal_duration: resolvableValue(z.string().optional()),
  key_algorithm: resolvableValue(z.string().optional()),
  options: resolvableValue(
    z.object({
      certificate_transparency_logging_preference: z.string().optional(),
      export: z.string().optional(),
    }).optional(),
  ),
  private_key: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  subject_alternative_names: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  validation_method: resolvableValue(z.string().optional()),
  validation_option: resolvableValue(
    z.object({
      domain_name: z.string(),
      validation_domain: z.string(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  domain_name: z.string().optional(),
  domain_validation_options: z.set(z.object({
    domain_name: z.string(),
    resource_record_name: z.string(),
    resource_record_type: z.string(),
    resource_record_value: z.string(),
  })).optional(),
  id: z.string().optional(),
  not_after: z.string().optional(),
  not_before: z.string().optional(),
  pending_renewal: z.boolean().optional(),
  renewal_eligibility: z.string().optional(),
  renewal_summary: z.object({
    renewal_status: z.string(),
    renewal_status_reason: z.string(),
    updated_at: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
  validation_emails: z.string().array().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/acm_certificate

export function AwsAcmCertificate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_acm_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
      _style={extendStyle(props, CERTIFICATE)}
    />
  )
}

export const useAwsAcmCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsAcmCertificate, idFilter, baseNode, optional)

export const useAwsAcmCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsAcmCertificate, idFilter, baseNode, optional)
