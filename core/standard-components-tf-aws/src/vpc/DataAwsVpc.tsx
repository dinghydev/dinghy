import { IacNodeProps, ResolvableStringSchema } from '@diac/base-components'
import z from 'zod'
import { AwsVpc } from './AwsVpc.tsx'

export const DataAwsVpcInputSchema = z.object({
  id: ResolvableStringSchema.optional(),
})

export const DataAwsVpcOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
})

export type DataAwsVpcInputProps =
  & z.input<typeof DataAwsVpcInputSchema>
  & IacNodeProps

export type DataAwsVpcOutputProps =
  & z.output<typeof DataAwsVpcOutputSchema>
  & DataAwsVpcInputProps

export function DataAwsVpc(props: DataAwsVpcInputProps) {
  return (
    <AwsVpc
      _inputSchema={DataAwsVpcInputSchema}
      _outputSchema={DataAwsVpcOutputSchema}
      {...props}
    />
  )
}
