import {
  IacNodeProps,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'
import { awsProps } from './index.ts'
import z from 'zod'
import { useTypedNode } from '@dinghy/base-components'
import { CertificateManager } from '@dinghy/standard-components-diagrams/awsSecurityIdentityCompliance'

export const AwsAcmCertificateInputSchema = z.object({
  domain: ResolvableStringArraySchema.optional(),
})

export const AwsAcmCertificateOuputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  id: ResolvableStringSchema.optional(),
})

export type AwsAcmCertificateInputProps =
  & z.input<
    typeof AwsAcmCertificateInputSchema
  >
  & IacNodeProps

export type AwsAcmCertificateOutputProps =
  & z.input<
    typeof AwsAcmCertificateOuputSchema
  >
  & AwsAcmCertificateInputProps

export function AwsAcmCertificate(props: AwsAcmCertificateInputProps) {
  return (
    <CertificateManager
      {...awsProps(
        props,
        AwsAcmCertificateInputSchema,
        AwsAcmCertificateOuputSchema,
      )}
    />
  )
}

export const useAwsAcmCertificate = () =>
  useTypedNode<AwsAcmCertificateOutputProps>(AwsAcmCertificate)
