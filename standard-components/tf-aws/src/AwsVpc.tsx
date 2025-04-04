import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'

import { aws } from './index.ts'
import z from 'zod'
import { GroupVpc2 } from '@reactiac/standard-components-diagrams'
import { useTypedNode } from '@reactiac/base-components'

export const AwsVpcInputSchema = z.object({
  cidr_block: ResolvableStringSchema.optional(),
})

export const AwsVpcOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
})

export type AwsVpcInputProps = z.infer<typeof AwsVpcInputSchema> & IacNodeProps

export type AwsVpcOutputProps = z.infer<typeof AwsVpcOutputSchema> &
  AwsVpcInputProps

export function AwsVpc(props: AwsVpcInputProps) {
  return <GroupVpc2 {...aws(props, AwsVpcInputSchema, AwsVpcOutputSchema)} />
}

export const useAwsVpc = () => useTypedNode<AwsVpcOutputProps>(AwsVpc)
