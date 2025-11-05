import { NodeProps, ResolvableStringSchema } from '@dinghy/base-components'
import { awsProps } from './index.ts'
import z from 'zod'
import { Android } from '@dinghy/diagrams/entitiesAws17Sdk'

export const AwsECSContainerSchema = z.object({
  name: ResolvableStringSchema.optional(),
})

export type AwsECSContainerProps =
  & z.output<typeof AwsECSContainerSchema>
  & NodeProps

export default function AwsECSContainer(props: AwsECSContainerProps) {
  return <Android {...awsProps(props, AwsECSContainerSchema)} />
}
