import {
  IacNodeProps,
  ResolvableStringSchema,
  useTypedNodes,
} from '@dinghy/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { useTypedNode } from '@dinghy/base-components'
import { NetworkFirewallEndpoints } from '@dinghy/standard-components-diagrams/awsSecurityIdentityCompliance'
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
    <NetworkFirewallEndpoints
      {...awsProps(
        props,
        AwsSecurityGroupInputSchema,
        AwsSecurityGroupOutputSchema,
      )}
    />
  )
}

export const useAwsSecurityGroup = (node?: any, id?: string) =>
  useTypedNode<AwsSecurityGroupOutputProps>(AwsSecurityGroup, node, id)

export const useAwsSecurityGroups = (node?: any, id?: string) =>
  useTypedNodes<AwsSecurityGroupOutputProps>(AwsSecurityGroup, node, id)
