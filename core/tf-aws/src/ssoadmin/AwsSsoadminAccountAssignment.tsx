import * as base from '@dinghy/base-components'
import { awsProps } from '../index.ts'
import z from 'zod'

const InputSchema = z.object({
  instance_arn: base.ResolvableStringSchema,
  permission_set_arn: base.ResolvableStringSchema,
  principal_id: base.ResolvableStringSchema,
  principal_type: base.ResolvableStringSchema,
  target_id: base.ResolvableStringSchema,
  target_type: base.ResolvableStringSchema,
})

const OutputSchema = z.object({
  id: base.ResolvableStringSchema.optional(),
})

export function AwsSsoadminAccountAssignment(props: any) {
  return (
    <base.Shape
      {...awsProps(
        props,
        InputSchema,
        OutputSchema,
      )}
    />
  )
}
