import {
  IacNodeProps,
  ResolvableStringSchema,
  Shape,
  useTypedNodes,
} from '@reactiac/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { useTypedNode } from '@reactiac/base-components'
import { aws4 } from '../../../standard-components-diagrams/src/index.ts'
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
    <aws4.NetworkFirewallEndpoints
      {...awsProps(
        props,
        AwsSecurityGroupInputSchema,
        AwsSecurityGroupOutputSchema,
      )}
    />
  )
}

export const useAwsSecurityGroup = (node?: any) =>
  useTypedNode<AwsSecurityGroupOutputProps>(AwsSecurityGroup, node)

export const useAwsSecurityGroups = (node?: any) =>
  useTypedNodes<AwsSecurityGroupOutputProps>(AwsSecurityGroup, node)
