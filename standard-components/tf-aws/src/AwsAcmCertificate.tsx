import {
  IacNodeProps,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'
import { aws } from './index.js'
import z from 'zod'
import { useTypedNode } from '@reactiac/base-components'
import { CertificateManager } from '@reactiac/standard-components-diagrams'

export const AwsAcmCertificateInputSchema = z.object({
  domain: ResolvableStringArraySchema.optional(),
})

export const AwsAcmCertificateOuputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  id: ResolvableStringSchema.optional(),
})

export type AwsAcmCertificateInputProps =
  & z.infer<typeof AwsAcmCertificateInputSchema>
  & IacNodeProps

export function AwsAcmCertificate(
  props: AwsAcmCertificateInputProps,
) {
  return (
    <CertificateManager
      {...aws(
        props,
        AwsAcmCertificateInputSchema,
        AwsAcmCertificateOuputSchema,
      )}
    />
  )
}

export const useAwsAcmCertificate = () =>
  useTypedNode<AwsAcmCertificateInputProps>(AwsAcmCertificate)
