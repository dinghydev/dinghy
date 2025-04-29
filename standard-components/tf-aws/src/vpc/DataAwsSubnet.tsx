import { IacNodeProps, ResolvableStringSchema } from '@reactiac/base-components'
import z from 'zod'
import { AwsSubnet } from './AwsSubnet.tsx'

export const DataAwsSubnetInputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  vpc_id: ResolvableStringSchema.optional(),
  filter: z.object({
    name: z.string(),
    values: z.string().array(),
  }).array().optional(),
})

export const DataAwsSubnetOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
})

export type DataAwsSubnetInputProps =
  & z.input<typeof DataAwsSubnetInputSchema>
  & IacNodeProps

export type DataAwsSubnetOutputProps =
  & z.output<typeof DataAwsSubnetOutputSchema>
  & DataAwsSubnetInputProps

export function DataAwsSubnet(props: DataAwsSubnetInputProps) {
  return (
    <AwsSubnet
      _inputSchema={DataAwsSubnetInputSchema}
      _outputSchema={DataAwsSubnetOutputSchema}
      {...props}
    />
  )
}
