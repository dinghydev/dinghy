import {
  IacNodeProps,
  ResolvableStringSchema,
  StringSchema,
} from '@reactiac/base-components'
import { GroupSecurityGroup } from '@reactiac/standard-components-diagrams'
import { aws } from '../index.ts'
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
  & z.infer<typeof AwsSubnetInputSchema>
  & IacNodeProps

export type AwsSubnetOutputProps =
  & z.infer<typeof AwsSubnetOutputSchema>
  & AwsSubnetInputProps

export default function AwsSubnet(props: AwsSubnetInputProps) {
  return (
    <GroupSecurityGroup
      {...aws(props, AwsSubnetInputSchema, AwsSubnetOutputSchema)}
    />
  )
}

export const useAwsSubnet = () => useTypedNode<AwsSubnetOutputProps>(AwsSubnet)
export const useAwsSubnets = () =>
  useTypedNodes<AwsSubnetOutputProps[]>(AwsSubnet)
