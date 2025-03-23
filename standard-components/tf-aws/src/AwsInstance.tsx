import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'
import { Android } from '@reactiac/standard-components-diagrams'
import { aws } from './index.js'
import z from 'zod'

export const AwsInstanceInputSchema = z.object({
  subnet_id: ResolvableStringSchema,
  ami: ResolvableStringSchema.optional(),
})

export const AwsInstanceOutputSchema = z.object({
  ami: ResolvableStringSchema.optional(),
})

export type AwsInstanceInputProps =
  & z.infer<typeof AwsInstanceInputSchema>
  & IacNodeProps

export default function AwsInstance(props: AwsInstanceInputProps) {
  return (
    <Android
      {...aws(props, AwsInstanceInputSchema, AwsInstanceOutputSchema)}
    />
  )
}
