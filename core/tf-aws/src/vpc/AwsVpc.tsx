import { IacNodeProps, ResolvableStringSchema } from '@dinghy/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { useTypedNode } from '@dinghy/base-components'
import { Vpc } from '@dinghy/diagrams/containersAwsGroups'

export const AwsVpcInputSchema = z.object({
  cidr_block: ResolvableStringSchema.optional(),
})

export const AwsVpcOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
})

export type AwsVpcInputProps = z.output<typeof AwsVpcInputSchema> & IacNodeProps

export type AwsVpcOutputProps =
  & z.output<typeof AwsVpcOutputSchema>
  & AwsVpcInputProps

export function AwsVpc(props: AwsVpcInputProps) {
  return (
    <Vpc
      {...awsProps(props, AwsVpcInputSchema, AwsVpcOutputSchema)}
    />
  )
}

export const useAwsVpc = () => useTypedNode<AwsVpcOutputProps>(AwsVpc)
