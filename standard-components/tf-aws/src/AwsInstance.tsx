import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'
import { aws3 } from '@reactiac/standard-components-diagrams'
import { awsProps } from './index.ts'
import z from 'zod'

export const AwsInstanceInputSchema = z.object({
  subnet_id: ResolvableStringSchema,
  ami: ResolvableStringSchema.optional(),
})

export const AwsInstanceOutputSchema = z.object({
  ami: ResolvableStringSchema.optional(),
})

export type AwsInstanceInputProps =
  & z.output<typeof AwsInstanceInputSchema>
  & IacNodeProps

export default function AwsInstance(props: AwsInstanceInputProps) {
  return (
    <aws3.Android
      {...awsProps(props, AwsInstanceInputSchema, AwsInstanceOutputSchema)}
    />
  )
}
