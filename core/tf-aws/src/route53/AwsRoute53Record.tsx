import {
  deepResolve,
  NodeProps,
  ResolvableNumberSchema,
  ResolvableStringArraySchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'

import { awsProps } from '../index.ts'
import z from 'zod'
import { Shape } from '@dinghy/base-components'

export const AwsRoute53RecordInputSchema = z.object({
  zone_id: ResolvableStringSchema.optional(),
  name: ResolvableStringSchema.optional(),
  type: ResolvableStringSchema.optional(),
  ttl: ResolvableNumberSchema.optional(),
  records: ResolvableStringArraySchema.optional(),
  alias: z
    .object({
      name: ResolvableStringSchema.optional(),
      zone_id: ResolvableStringSchema.optional(),
      evaluate_target_health: z.boolean().optional(),
    })
    .optional(),
})

export const AwsRoute53RecordOutputSchema = z.object({
  fqdn: ResolvableStringSchema.optional(),
})

export type AwsRoute53RecordInputProps =
  & z.output<
    typeof AwsRoute53RecordInputSchema
  >
  & NodeProps

export type AwsRoute53RecordOutputProps =
  & z.output<
    typeof AwsRoute53RecordOutputSchema
  >
  & AwsRoute53RecordInputProps

export function AwsRoute53Record(props: AwsRoute53RecordInputProps) {
  const _importId = (node: any) => {
    const zone_id = deepResolve(node, node._props, 'zone_id')
    return `${zone_id}_${node._props.name}_${node._props.type}`
  }

  return (
    <Shape
      _importId={_importId}
      {...awsProps(
        props,
        AwsRoute53RecordInputSchema,
        AwsRoute53RecordOutputSchema,
      )}
    />
  )
}
