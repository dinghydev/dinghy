import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/availability_zone

export const InputSchema = z.object({
  all_availability_zones: resolvableValue(z.boolean().optional()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
  zone_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  group_long_name: z.string().optional(),
  group_name: z.string().optional(),
  name_suffix: z.string().optional(),
  network_border_group: z.string().optional(),
  opt_in_status: z.string().optional(),
  parent_zone_id: z.string().optional(),
  parent_zone_name: z.string().optional(),
  zone_type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsAvailabilityZone(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_availability_zone'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsAvailabilityZone = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsAvailabilityZone, node, id)

export const useDataAwsAvailabilityZones = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsAvailabilityZone, node, id)
