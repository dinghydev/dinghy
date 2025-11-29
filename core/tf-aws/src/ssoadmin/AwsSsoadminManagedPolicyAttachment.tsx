import * as base from '@dinghy/base-components'
import { awsProps } from '../utils/awsProps.ts'
import z from 'zod'

const InputSchema = z.object({
  instance_arn: base.ResolvableStringSchema,
  permission_set_arn: base.ResolvableStringSchema,
  managed_policy_arn: base.ResolvableStringSchema,
})

const OutputSchema = z.object({
  id: base.ResolvableStringSchema.optional(),
})

export function AwsSsoadminManagedPolicyAttachment(props: any) {
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
