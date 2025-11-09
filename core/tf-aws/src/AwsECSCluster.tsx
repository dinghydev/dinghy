import { NodeProps, ResolvableStringSchema } from '@dinghy/base-components'
import { awsProps } from './index.ts'
import z from 'zod'
import { Shape } from '@dinghy/base-components'

export const ECSClusterSchema = z.object({
  name: ResolvableStringSchema.optional(),
})

export type ECSClusterProps = z.input<typeof ECSClusterSchema> & NodeProps

export default function AwsECSCluster(props: ECSClusterProps) {
  return <Shape {...awsProps(props, ECSClusterSchema)} />
}
