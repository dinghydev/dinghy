import { IacNodeProps, ResolvableStringSchema } from '@dinghy/base-components'
import { Android } from '@dinghy/standard-components-diagrams/aws17Sdk'
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
    <Android
      {...awsProps(props, AwsInstanceInputSchema, AwsInstanceOutputSchema)}
    />
  )
}
