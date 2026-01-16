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

export const InputSchema = TfMetaSchema.extend({
  certificate_authority_configuration: resolvableValue(z.object({
    key_algorithm: z.string(),
    signing_algorithm: z.string(),
    subject: z.object({
      common_name: z.string().optional(),
      country: z.string().optional(),
      distinguished_name_qualifier: z.string().optional(),
      generation_qualifier: z.string().optional(),
      given_name: z.string().optional(),
      initials: z.string().optional(),
      locality: z.string().optional(),
      organization: z.string().optional(),
      organizational_unit: z.string().optional(),
      pseudonym: z.string().optional(),
      state: z.string().optional(),
      surname: z.string().optional(),
      title: z.string().optional(),
    }),
  })),
  enabled: resolvableValue(z.boolean().optional()),
  key_storage_security_standard: resolvableValue(z.string().optional()),
  permanent_deletion_time_in_days: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  revocation_configuration: resolvableValue(
    z.object({
      crl_configuration: z.object({
        custom_cname: z.string().optional(),
        enabled: z.boolean().optional(),
        expiration_in_days: z.number().optional(),
        s3_bucket_name: z.string().optional(),
        s3_object_acl: z.string().optional(),
      }).optional(),
      ocsp_configuration: z.object({
        enabled: z.boolean(),
        ocsp_custom_cname: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
  usage_mode: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  certificate: z.string().optional(),
  certificate_chain: z.string().optional(),
  certificate_signing_request: z.string().optional(),
  id: z.string().optional(),
  not_after: z.string().optional(),
  not_before: z.string().optional(),
  serial: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/acmpca_certificate_authority

export function AwsAcmpcaCertificateAuthority(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_acmpca_certificate_authority'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsAcmpcaCertificateAuthority = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsAcmpcaCertificateAuthority,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAcmpcaCertificateAuthoritys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsAcmpcaCertificateAuthority,
    idFilter,
    baseNode,
    optional,
  )
