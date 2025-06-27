import {
  type IacNodeProps,
  ResolvableStringSchema,
} from '@reactiac/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { Shape, useTypedNode } from '@reactiac/base-components'

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

export function AwsIamRolePolicy(props: AwsIamRolePolicyInputProps) {
  const _importId = (node: any) => `${node._props.role}:${node._props.name}`
  return (
    <Shape
      _importId={_importId}
      {...awsProps(
        props,
        AwsIamRolePolicyInputSchema,
        AwsIamRolePolicyOutputSchema,
      )}
    />
  )
}
export const useAwsIamRolePolicy = (node?: any, id?: string) =>
  useTypedNode<AwsIamRolePolicyOutputProps>(AwsIamRolePolicy, node, id)
