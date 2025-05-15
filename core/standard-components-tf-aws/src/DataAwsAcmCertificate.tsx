import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'
import z from 'zod'
import { AwsAcmCertificate } from './AwsAcmCertificate.tsx'
import { useTypedNode } from '@reactiac/base-components'

export const DataAwsAcmCertificateInputSchema = z.object({
  domain: ResolvableStringSchema.optional(),
  zone_id: ResolvableStringSchema.optional(),
})

export const DataAwsAcmCertificateOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  zone_id: ResolvableStringSchema.optional(),
})

export type DataAwsAcmCertificateInputProps =
  & z.output<
    typeof DataAwsAcmCertificateInputSchema
  >
  & IacNodeProps

export type DataAwsAcmCertificateOutputProps =
  & z.output<
    typeof DataAwsAcmCertificateOutputSchema
  >
  & DataAwsAcmCertificateInputProps

export function DataAwsAcmCertificate(props: DataAwsAcmCertificateInputProps) {
  return (
    <AwsAcmCertificate
      _title={(node: any) => node._props.domain}
      _inputSchema={DataAwsAcmCertificateInputSchema}
      _outputSchema={DataAwsAcmCertificateOutputSchema}
      {...(props as any)}
    />
  )
}

export const useDataAwsAcmCertificate = (id?: string) =>
  useTypedNode<DataAwsAcmCertificateOutputProps>(DataAwsAcmCertificate, id)
