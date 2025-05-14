import {
  IacNodeProps,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'
import { awsProps } from './index.ts'
import z from 'zod'
import { useTypedNode } from '@reactiac/base-components'
import { aws4 } from '@reactiac/standard-components-diagrams'

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
    <aws4.CertificateManager
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
