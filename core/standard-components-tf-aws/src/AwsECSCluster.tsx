import { IacNodeProps, ResolvableStringSchema } from '@diac/base-components'
import { awsProps } from './index.ts'
import z from 'zod'
import { Shape } from '@diac/base-components'

export const ECSClusterSchema = z.object({
  name: ResolvableStringSchema.optional(),
})

export type ECSClusterProps = z.input<typeof ECSClusterSchema> & IacNodeProps

export default function AwsECSCluster(props: ECSClusterProps) {
  return <Shape _dashed={false} {...awsProps(props, ECSClusterSchema)} />
}
