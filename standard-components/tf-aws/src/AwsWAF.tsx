import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'

import { aws } from './index.ts'
import z from 'zod'
import { Waf } from '@reactiac/standard-components-diagrams'

export const AwsWAFSchema = z.object({
  name: ResolvableStringSchema.optional(),
})

export type AwsWAFProps = z.infer<typeof AwsWAFSchema> & IacNodeProps

export default function AwsWAF(props: AwsWAFProps) {
  return <Waf {...aws(props, AwsWAFSchema)} />
}
