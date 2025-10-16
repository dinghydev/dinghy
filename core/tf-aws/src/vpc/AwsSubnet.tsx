import {
  IacNodeProps,
  ResolvableStringSchema,
  StringSchema,
} from '@dinghy/base-components'
import { awsProps } from '../index.ts'
import z from 'zod'
import { useTypedNode, useTypedNodes } from '@dinghy/base-components'
import { NeutronSubnet } from '@dinghy/diagrams/entitiesOpenstackBlue'

export const AwsSubnetInputSchema = z.object({
  vpc_id: ResolvableStringSchema.optional(),
  cidr_block: ResolvableStringSchema.optional(),
})

export const AwsSubnetOutputSchema = z.object({
  id: StringSchema,
  arn: StringSchema,
})

export type AwsSubnetInputProps =
  & z.input<typeof AwsSubnetInputSchema>
  & IacNodeProps

export type AwsSubnetOutputProps =
  & z.output<typeof AwsSubnetOutputSchema>
  & AwsSubnetInputProps

export function AwsSubnet(props: AwsSubnetInputProps) {
  return (
    <NeutronSubnet
      {...awsProps(props, AwsSubnetInputSchema, AwsSubnetOutputSchema)}
    />
  )
}

export const useAwsSubnet = (node?: any, id?: string) =>
  useTypedNode<AwsSubnetOutputProps>(AwsSubnet, node, id)
export const useAwsSubnets = (node?: any, id?: string) =>
  useTypedNodes<AwsSubnetOutputProps[]>(AwsSubnet, node, id)
