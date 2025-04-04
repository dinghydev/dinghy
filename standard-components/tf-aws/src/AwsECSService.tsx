import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'
import { GroupEc2InstanceContents } from '@reactiac/standard-components-diagrams'
import { aws } from './index.ts'
import z from 'zod'

export const AwsECSServiceSchema = z.object({
  name: ResolvableStringSchema.optional(),
})

export type AwsECSServiceProps = z.infer<typeof AwsECSServiceSchema> &
  IacNodeProps

export default function AwsECSService(props: AwsECSServiceProps) {
  return <GroupEc2InstanceContents {...aws(props, AwsECSServiceSchema)} />
}
