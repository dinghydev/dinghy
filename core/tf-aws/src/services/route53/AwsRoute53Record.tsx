import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53_record

export const InputSchema = z.object({
  type: resolvableValue(z.string()),
  zone_id: resolvableValue(z.string()),
  alias: resolvableValue(
    z.object({
      evaluate_target_health: z.boolean(),
      name: z.string(),
      zone_id: z.string(),
    }).optional(),
  ),
  allow_overwrite: resolvableValue(z.boolean().optional()),
  cidr_routing_policy: resolvableValue(
    z.object({
      collection_id: z.string(),
      location_name: z.string(),
    }).optional(),
  ),
  failover_routing_policy: resolvableValue(
    z.object({
      type: z.string(),
    }).optional(),
  ),
  geolocation_routing_policy: resolvableValue(
    z.object({
      continent: z.string().optional(),
      country: z.string().optional(),
      subdivision: z.string().optional(),
    }).optional(),
  ),
  geoproximity_routing_policy: resolvableValue(
    z.object({
      aws_region: z.string().optional(),
      bias: z.number().optional(),
      local_zone_group: z.string().optional(),
    }).optional(),
  ),
  health_check_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  latency_routing_policy: resolvableValue(
    z.object({
      region: z.string(),
    }).optional(),
  ),
  multivalue_answer_routing_policy: resolvableValue(z.boolean().optional()),
  records: resolvableValue(z.string().array().optional()),
  set_identifier: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  ttl: resolvableValue(z.number().optional()),
  weighted_routing_policy: resolvableValue(
    z.object({
      weight: z.number(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  fqdn: z.string().optional(),
  name: z.string().optional(),
})

export const ImportSchema = z.object({
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  zone_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  set_identifier: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRoute53Record(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_record'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsRoute53Record = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRoute53Record, node, id)

export const useAwsRoute53Records = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRoute53Record, node, id)
