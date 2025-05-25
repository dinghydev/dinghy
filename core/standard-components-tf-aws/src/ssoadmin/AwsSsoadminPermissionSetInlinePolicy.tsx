import * as base from '@reactiac/base-components'
import { awsProps } from '../index.ts'
import z from 'zod'

const InputSchema = z.object({
  instance_arn: base.ResolvableStringSchema,
  permission_set_arn: base.ResolvableStringSchema,
  inline_policy: base.ResolvableStringSchema,
})

const OutputSchema = z.object({
  id: base.ResolvableStringSchema.optional(),
})

export function AwsSsoadminPermissionSetInlinePolicy(props: any) {
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
