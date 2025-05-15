import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { aws4 } from '../../../standard-components-diagrams/src/index.ts'
import { useTypedNode } from '@reactiac/base-components'

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
    <aws4.GroupVpc2
      {...awsProps(props, AwsVpcInputSchema, AwsVpcOutputSchema)}
    />
  )
}

export const useAwsVpc = () => useTypedNode<AwsVpcOutputProps>(AwsVpc)
