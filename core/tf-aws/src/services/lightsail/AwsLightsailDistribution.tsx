import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_distribution

export const InputSchema = z.object({
  bundle_id: resolvableValue(z.string()),
  default_cache_behavior: resolvableValue(z.object({
    behavior: z.string(),
  })),
  name: resolvableValue(z.string()),
  cache_behavior: resolvableValue(
    z.object({
      behavior: z.string(),
      path: z.string(),
    }).array().optional(),
  ),
  cache_behavior_settings: resolvableValue(
    z.object({
      allowed_http_methods: z.string().optional(),
      cached_http_methods: z.string().optional(),
      default_ttl: z.number().optional(),
      maximum_ttl: z.number().optional(),
      minimum_ttl: z.number().optional(),
    }).optional(),
  ),
  certificate_name: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  ip_address_type: resolvableValue(z.string().optional()),
  is_enabled: resolvableValue(z.boolean().optional()),
  origin: resolvableValue(z.object({
    name: z.string(),
    protocol_policy: z.string().optional(),
    region_name: z.string(),
    resource_type: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  alternative_domain_names: z.string().array().optional(),
  arn: z.string().optional(),
  created_at: z.string().optional(),
  domain_name: z.string().optional(),
  location: z.object({
    availability_zone: z.string(),
    region_name: z.string(),
  }).array().optional(),
  origin_public_dns: z.string().optional(),
  resource_type: z.string().optional(),
  status: z.string().optional(),
  support_code: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLightsailDistribution(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_distribution'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailDistribution = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLightsailDistribution, node, id)

export const useAwsLightsailDistributions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLightsailDistribution, node, id)
