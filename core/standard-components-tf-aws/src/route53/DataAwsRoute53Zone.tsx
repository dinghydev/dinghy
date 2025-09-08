import { IacNodeProps, ResolvableStringSchema } from '@dinghy/base-components'
import z from 'zod'
import { AwsRoute53Zone } from './AwsRoute53Zone.tsx'
import { useTypedNode } from '@dinghy/base-components'

export const DataAwsRoute53ZoneInputSchema = z.object({
  name: ResolvableStringSchema.optional(),
  zone_id: ResolvableStringSchema.optional(),
})

export const DataAwsRoute53ZoneOutputSchema = z.object({
  arn: ResolvableStringSchema.optional(),
  zone_id: ResolvableStringSchema.optional(),
})

export type DataAwsRoute53ZoneInputProps =
  & z.output<
    typeof DataAwsRoute53ZoneInputSchema
  >
  & IacNodeProps

export type DataAwsRoute53ZoneOutputProps =
  & z.output<
    typeof DataAwsRoute53ZoneOutputSchema
  >
  & DataAwsRoute53ZoneInputProps

export function DataAwsRoute53Zone(props: DataAwsRoute53ZoneInputProps) {
  return (
    <AwsRoute53Zone
      _title={((node: any) => node._props.name) as any}
      _inputSchema={DataAwsRoute53ZoneInputSchema}
      _outputSchema={DataAwsRoute53ZoneOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRoute53Zone = (node?: any, id?: string) =>
  useTypedNode<DataAwsRoute53ZoneOutputProps>(DataAwsRoute53Zone, node, id)
