import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAcmpcaCertificateAuthority } from './AwsAcmpcaCertificateAuthority.tsx'

export const InputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  certificate: z.string().optional(),
  certificate_chain: z.string().optional(),
  certificate_signing_request: z.string().optional(),
  id: z.string().optional(),
  key_storage_security_standard: z.string().optional(),
  not_after: z.string().optional(),
  not_before: z.string().optional(),
  revocation_configuration: z.object({
    crl_configuration: z.object({
      custom_cname: z.string(),
      enabled: z.boolean(),
      expiration_in_days: z.number(),
      s3_bucket_name: z.string(),
      s3_object_acl: z.string(),
    }).array(),
    ocsp_configuration: z.object({
      enabled: z.boolean(),
      ocsp_custom_cname: z.string(),
    }).array(),
  }).array().optional(),
  serial: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
  usage_mode: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/acmpca_certificate_authority

export function DataAwsAcmpcaCertificateAuthority(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAcmpcaCertificateAuthority
      _type='aws_acmpca_certificate_authority'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAcmpcaCertificateAuthority = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsAcmpcaCertificateAuthority,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAcmpcaCertificateAuthoritys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsAcmpcaCertificateAuthority,
    idFilter,
    baseNode,
    optional,
  )
