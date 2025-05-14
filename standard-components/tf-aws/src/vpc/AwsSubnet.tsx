import {
  IacNodeProps,
  ResolvableStringSchema,
  StringSchema,
} from '@reactiac/base-components'
import { aws4 } from '@reactiac/standard-components-diagrams'
import { awsProps } from '../index.ts'
import z from 'zod'
import { useTypedNode, useTypedNodes } from '@reactiac/base-components'

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
    <aws4.GroupSecurityGroup
      {...awsProps(props, AwsSubnetInputSchema, AwsSubnetOutputSchema)}
    />
  )
}

export const useAwsSubnet = (node?: any) =>
  useTypedNode<AwsSubnetOutputProps>(AwsSubnet, node)
export const useAwsSubnets = (node?: any) =>
  useTypedNodes<AwsSubnetOutputProps[]>(AwsSubnet, node)
