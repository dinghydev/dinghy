import {
  type IacNodeProps,
  ResolvableNumberSchema,
  ResolvableRecordSchema,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { aws } from '../index.ts'
import z from 'zod'
import { Bucket } from '@reactiac/standard-components-diagrams'
import { useTypedNode } from '@reactiac/base-components'

export const AwsIamRolePolicyInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  description: ResolvableStringSchema.optional(),
  role: ResolvableStringSchema.optional(),
  policy: ResolvableStringSchema,
})

export const AwsIamRolePolicyOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
})

export type AwsIamRolePolicyInputProps =
  & z.input<typeof AwsIamRolePolicyInputSchema>
  & IacNodeProps

export type AwsIamRolePolicyOutputProps =
  & z.output<typeof AwsIamRolePolicyOutputSchema>
  & AwsIamRolePolicyInputProps

export function importId(props: AwsIamRolePolicyOutputProps) {
  return `${props.role}:${props.name}`
}

export function AwsIamRolePolicy(props: AwsIamRolePolicyInputProps) {
  return (
    <Bucket
      {...aws(
        props,
        AwsIamRolePolicyInputSchema,
        AwsIamRolePolicyOutputSchema,
      )}
    />
  )
}
export const useAwsIamRolePolicy = (id?: string) =>
  useTypedNode<AwsIamRolePolicyOutputProps>(AwsIamRolePolicy, id)
