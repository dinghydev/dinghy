import { IacNodeProps, ResolvableStringSchema } from '@dinghy/base-components'
import { Ec2InstanceContents } from '@dinghy/standard-components-diagrams/awsGroups'
import { awsProps } from './index.ts'
import z from 'zod'

export const AwsECSServiceSchema = z.object({
  name: ResolvableStringSchema.optional(),
})

export type AwsECSServiceProps =
  & z.output<typeof AwsECSServiceSchema>
  & IacNodeProps

export default function AwsECSService(props: AwsECSServiceProps) {
  return (
    <Ec2InstanceContents
      {...awsProps(props, AwsECSServiceSchema)}
    />
  )
}
