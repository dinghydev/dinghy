import {
  type IacNodeProps,
  ResolvableRecordSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from '../index.ts'
import z from 'zod'
import { Shape, useTypedNode } from '@reactiac/base-components'

export const AwsInstanceInputSchema = z.object({
  ami: ResolvableStringSchema.optional(),
  instance_type: ResolvableStringSchema.optional(),
  key_name: ResolvableStringSchema.optional(),
  vpc_security_group_ids: ResolvableStringSchema.array().optional(),
  subnet_id: ResolvableStringSchema.optional(),
  user_data: ResolvableStringSchema.optional(),
  user_data_base64: ResolvableStringSchema.optional(),
  tags: ResolvableRecordSchema.optional(),
})

export const AwsInstanceOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
})

export type AwsInstanceInputProps =
  & z.input<typeof AwsInstanceInputSchema>
  & IacNodeProps

export type AwsInstanceOutputProps =
  & z.output<typeof AwsInstanceOutputSchema>
  & AwsInstanceInputProps

export function importId(props: AwsInstanceOutputProps) {
  return props.id
}

export function AwsInstance(props: AwsInstanceInputProps) {
  return (
    <Shape
      {...aws(
        props,
        AwsInstanceInputSchema,
        AwsInstanceOutputSchema,
      )}
    />
  )
}
export const useAwsInstance = (id?: string) =>
  useTypedNode<AwsInstanceOutputProps>(AwsInstance, id)
