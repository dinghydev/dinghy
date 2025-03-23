import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'
import { aws } from './index.js'
import z from 'zod'
import { Shape } from '@reactiac/base-components'

export const ECSClusterSchema = z.object({
  name: ResolvableStringSchema.optional(),
})

export type ECSClusterProps = z.infer<typeof ECSClusterSchema> & IacNodeProps

export default function AwsECSCluster(props: ECSClusterProps) {
  return (
    <Shape
      _dashed={false}
      {...aws(props, ECSClusterSchema)}
    />
  )
}
