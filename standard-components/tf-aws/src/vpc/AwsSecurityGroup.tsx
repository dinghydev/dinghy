import {
  IacNodeProps,
  ResolvableStringSchema,
  Shape,
} from '@reactiac/base-components'

import { aws } from '../index.ts'
import z from 'zod'
import { useTypedNode } from '@reactiac/base-components'

export const AwsSecurityGroupInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  description: ResolvableStringSchema.optional(),
  vpc_id: ResolvableStringSchema.optional(),
})

export const AwsSecurityGroupOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
})

export type AwsSecurityGroupInputProps =
  & z.output<typeof AwsSecurityGroupInputSchema>
  & IacNodeProps

export type AwsSecurityGroupOutputProps =
  & z.output<typeof AwsSecurityGroupOutputSchema>
  & AwsSecurityGroupInputProps

export function AwsSecurityGroup(props: AwsSecurityGroupInputProps) {
  return (
    <Shape
      {...aws(props, AwsSecurityGroupInputSchema, AwsSecurityGroupOutputSchema)}
    />
  )
}

export const useAwsSecurityGroup = () =>
  useTypedNode<AwsSecurityGroupOutputProps>(AwsSecurityGroup)
