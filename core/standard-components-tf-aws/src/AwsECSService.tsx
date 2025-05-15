import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'
import { aws4 } from '../../standard-components-diagrams/src/index.ts'
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
    <aws4.GroupEc2InstanceContents
      {...awsProps(props, AwsECSServiceSchema)}
    />
  )
}
