import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'
import { Android } from '@reactiac/standard-components-diagrams'
import { aws } from './index.ts'
import z from 'zod'

export const AwsECSContainerSchema = z.object({
  name: ResolvableStringSchema.optional(),
})

export type AwsECSContainerProps = z.infer<typeof AwsECSContainerSchema> &
  IacNodeProps

export default function AwsECSContainer(props: AwsECSContainerProps) {
  return <Android {...aws(props, AwsECSContainerSchema)} />
}
