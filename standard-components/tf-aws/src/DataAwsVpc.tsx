import { IacNodeProps, ResolvableStringSchema } from  '@reactiac/base-components'
import z from 'zod'
import { AwsVpc } from './AwsVpc.js'

export const DataAwsVpcInputSchema = z.object({
  id: ResolvableStringSchema.optional(),
})

export const DataAwsVpcOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
})

export type DataAwsVpcInputProps =
  & z.infer<typeof DataAwsVpcInputSchema>
  & IacNodeProps

export type DataAwsVpcOutputProps =
  & z.infer<typeof DataAwsVpcOutputSchema>
  & DataAwsVpcInputProps

export default function DataAwsVpc(
  props: DataAwsVpcInputProps,
) {
  return (
    <AwsVpc
      _inputSchema={DataAwsVpcInputSchema}
      _outputSchema={DataAwsVpcOutputSchema}
      {...props}
    />
  )
}
