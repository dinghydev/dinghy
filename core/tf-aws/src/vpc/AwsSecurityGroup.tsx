import {
  NodeProps,
  ResolvableStringSchema,
  useTypedNodes,
} from '@dinghy/base-components'

import { awsProps } from '../utils/awsProps.ts'
import z from 'zod'
import { useTypedNode } from '@dinghy/base-components'
import { NetworkFirewallEndpoints } from '@dinghy/diagrams/entitiesAwsSecurityIdentityCompliance'
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
  & NodeProps

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
