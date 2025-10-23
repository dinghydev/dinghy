import { IacNodeProps, ResolvableStringSchema } from '@dinghy/base-components'
import z from 'zod'
import { AwsSecurityGroup } from './AwsSecurityGroup.tsx'

export const DataAwsSecurityGroupInputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  name: ResolvableStringSchema.optional(),
  vpc_id: ResolvableStringSchema.optional(),
  filter: z.object({
    name: ResolvableStringSchema.optional(),
    values: z.array(ResolvableStringSchema).optional(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export const DataAwsSecurityGroupOutputSchema = z.object({
  id: ResolvableStringSchema.optional(),
  arn: ResolvableStringSchema.optional(),
})

export type DataAwsSecurityGroupInputProps =
  & z.input<typeof DataAwsSecurityGroupInputSchema>
  & IacNodeProps

export type DataAwsSecurityGroupOutputProps =
  & z.output<typeof DataAwsSecurityGroupOutputSchema>
  & DataAwsSecurityGroupInputProps

export function DataAwsSecurityGroup(props: DataAwsSecurityGroupInputProps) {
  return (
    <AwsSecurityGroup
      _inputSchema={DataAwsSecurityGroupInputSchema}
      _outputSchema={DataAwsSecurityGroupOutputSchema}
      {...(props as any)}
    />
  )
}
