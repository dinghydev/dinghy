import { IacNodeProps, ResolvableStringSchema } from '@diac/base-components'
import { awsProps } from './index.ts'
import z from 'zod'
import { Android } from '@diac/standard-components-diagrams/aws17Sdk'

export const AwsECSContainerSchema = z.object({
  name: ResolvableStringSchema.optional(),
})

export type AwsECSContainerProps =
  & z.output<typeof AwsECSContainerSchema>
  & IacNodeProps

export default function AwsECSContainer(props: AwsECSContainerProps) {
  return <Android {...awsProps(props, AwsECSContainerSchema)} />
}
