import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53_health_check

export const InputSchema = z.object({
  type: resolvableValue(z.string()),
  child_health_threshold: resolvableValue(z.number().optional()),
  child_healthchecks: resolvableValue(z.string().array().optional()),
  cloudwatch_alarm_name: resolvableValue(z.string().optional()),
  cloudwatch_alarm_region: resolvableValue(z.string().optional()),
  disabled: resolvableValue(z.boolean().optional()),
  enable_sni: resolvableValue(z.boolean().optional()),
  failure_threshold: resolvableValue(z.number().optional()),
  fqdn: resolvableValue(z.string().optional()),
  insufficient_data_health_status: resolvableValue(z.string().optional()),
  invert_healthcheck: resolvableValue(z.boolean().optional()),
  ip_address: resolvableValue(z.string().optional()),
  measure_latency: resolvableValue(z.boolean().optional()),
  port: resolvableValue(z.number().optional()),
  reference_name: resolvableValue(z.string().optional()),
  regions: resolvableValue(z.string().array().optional()),
  request_interval: resolvableValue(z.number().optional()),
  resource_path: resolvableValue(z.string().optional()),
  routing_control_arn: resolvableValue(z.string().optional()),
  search_string: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  triggers: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRoute53HealthCheck(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_health_check'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53HealthCheck = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRoute53HealthCheck, node, id)

export const useAwsRoute53HealthChecks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRoute53HealthCheck, node, id)
