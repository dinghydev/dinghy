import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsAvailabilityZonesInputSchema = TfMetaSchema.extend({
  all_availability_zones: resolvableValue(z.boolean().optional()),
  exclude_names: resolvableValue(z.string().array().optional()),
  exclude_zone_ids: resolvableValue(z.string().array().optional()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsAvailabilityZonesOutputSchema = z.object({
  group_names: z.set(z.string()).optional(),
  id: z.string().optional(),
  names: z.string().array().optional(),
  zone_ids: z.string().array().optional(),
})

export type DataAwsAvailabilityZonesInputProps =
  & z.input<typeof DataAwsAvailabilityZonesInputSchema>
  & NodeProps

export type DataAwsAvailabilityZonesOutputProps =
  & z.output<typeof DataAwsAvailabilityZonesOutputSchema>
  & z.output<typeof DataAwsAvailabilityZonesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/availability_zones

export function DataAwsAvailabilityZones(
  props: Partial<DataAwsAvailabilityZonesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_availability_zones'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAvailabilityZonesInputSchema}
      _outputSchema={DataAwsAvailabilityZonesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsAvailabilityZoness = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAvailabilityZonesOutputProps>(
    DataAwsAvailabilityZones,
    idFilter,
    baseNode,
    optional,
  )
