import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'

import { awsProps } from './index.ts'
import z from 'zod'
import { Waf } from '@reactiac/standard-components-diagrams'

export const AwsWAFSchema = z.object({
  name: ResolvableStringSchema.optional(),
})

export type AwsWAFProps = z.output<typeof AwsWAFSchema> & IacNodeProps

export default function AwsWAF(props: AwsWAFProps) {
  return <Waf {...awsProps(props, AwsWAFSchema)} />
}
