import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsRoute53RecordsInputSchema = TfMetaSchema.extend({
  zone_id: resolvableValue(z.string()),
  name_regex: resolvableValue(z.string().optional()),
})

export const DataAwsRoute53RecordsOutputSchema = z.object({
  resource_record_sets: z.object({
    alias_target: z.object({
      dns_name: z.string(),
      evaluate_target_health: z.boolean(),
      hosted_zone_id: z.string(),
    }),
    cidr_routing_config: z.object({
      collection_id: z.string(),
      location_name: z.string(),
    }),
    failover: z.string(),
    geolocation: z.object({
      continent_code: z.string(),
      country_code: z.string(),
      subdivision_code: z.string(),
    }),
    geoproximity_location: z.object({
      aws_region: z.string(),
      bias: z.number(),
      coordinates: z.object({
        latitude: z.string(),
        longitude: z.string(),
      }),
      local_zone_group: z.string(),
    }),
    health_check_id: z.string(),
    multi_value_answer: z.boolean(),
    name: z.string(),
    region: z.string(),
    resource_records: z.object({
      value: z.string(),
    }).array(),
    set_identifier: z.string(),
    traffic_policy_instance_id: z.string(),
    ttl: z.number(),
    type: z.string(),
    weight: z.number(),
  }).array().optional(),
})

export type DataAwsRoute53RecordsInputProps =
  & z.input<typeof DataAwsRoute53RecordsInputSchema>
  & NodeProps

export type DataAwsRoute53RecordsOutputProps =
  & z.output<typeof DataAwsRoute53RecordsOutputSchema>
  & z.output<typeof DataAwsRoute53RecordsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/route53_records

export function DataAwsRoute53Records(
  props: Partial<DataAwsRoute53RecordsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_records'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRoute53RecordsInputSchema}
      _outputSchema={DataAwsRoute53RecordsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRoute53Recordss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRoute53RecordsOutputProps>(
    DataAwsRoute53Records,
    idFilter,
    baseNode,
    optional,
  )
