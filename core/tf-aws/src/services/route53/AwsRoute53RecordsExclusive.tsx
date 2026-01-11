import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  zone_id: resolvableValue(z.string()),
  resource_record_set: resolvableValue(
    z.object({
      failover: z.string().optional(),
      health_check_id: z.string().optional(),
      multi_value_answer: z.boolean().optional(),
      name: z.string(),
      region: z.string().optional(),
      set_identifier: z.string().optional(),
      traffic_policy_instance_id: z.string().optional(),
      ttl: z.number().optional(),
      type: z.string().optional(),
      weight: z.number().optional(),
      alias_target: z.object({
        dns_name: z.string(),
        evaluate_target_health: z.boolean(),
        hosted_zone_id: z.string(),
      }).array().optional(),
      cidr_routing_config: z.object({
        collection_id: z.string(),
        location_name: z.string(),
      }).array().optional(),
      geolocation: z.object({
        continent_code: z.string().optional(),
        country_code: z.string().optional(),
        subdivision_code: z.string().optional(),
      }).array().optional(),
      geoproximity_location: z.object({
        aws_region: z.string().optional(),
        bias: z.number().optional(),
        local_zone_group: z.string().optional(),
        coordinates: z.object({
          latitude: z.string(),
          longitude: z.string(),
        }).array().optional(),
      }).array().optional(),
      resource_records: z.object({
        value: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_records_exclusive

export function AwsRoute53RecordsExclusive(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_records_exclusive'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53RecordsExclusive = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsRoute53RecordsExclusive,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53RecordsExclusives = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsRoute53RecordsExclusive,
    idFilter,
    baseNode,
    optional,
  )
