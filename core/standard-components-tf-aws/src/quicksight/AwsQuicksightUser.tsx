import {
  type IacNodeProps,
  ResolvableStringSchema,
  Shape,
} from '@diac/base-components'
import { awsProps } from '../index.ts'
import z from 'zod'

export const InputSchema = z.object({
  identity_type: ResolvableStringSchema.default('IAM'),
  user_role: ResolvableStringSchema,
  email: ResolvableStringSchema,
  aws_account_id: ResolvableStringSchema.optional(),
  iam_arn: ResolvableStringSchema,
  user_name: ResolvableStringSchema.optional(),
})

export const OutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
})

export type InputProps =
  & z.output<
    typeof InputSchema
  >
  & IacNodeProps

export type OutputProps =
  & z.output<
    typeof OutputSchema
  >
  & InputProps

export function AwsQuicksightUser(props: InputProps) {
  return (
    <Shape
      {...awsProps(
        props,
        InputSchema,
        OutputSchema,
      )}
    />
  )
}
