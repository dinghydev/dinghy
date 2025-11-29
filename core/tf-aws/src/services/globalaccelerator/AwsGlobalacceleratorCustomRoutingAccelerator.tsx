import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/globalaccelerator_custom_routing_accelerator

export const InputSchema = z.object({
  hosted_zone_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  attributes: resolvableValue(
    z.object({
      flow_logs_enabled: z.boolean().optional(),
      flow_logs_s3_bucket: z.string().optional(),
      flow_logs_s3_prefix: z.string().optional(),
    }).optional(),
  ),
  enabled: resolvableValue(z.boolean().optional()),
  ip_address_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  dns_name: z.string().optional(),
  id: z.string().optional(),
  ip_addresses: z.string().array().optional(),
  ip_sets: z.object({
    ip_addresses: z.string().array(),
    ip_family: z.string(),
  }).array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGlobalacceleratorCustomRoutingAccelerator(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_globalaccelerator_custom_routing_accelerator'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsGlobalacceleratorCustomRoutingAccelerator = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsGlobalacceleratorCustomRoutingAccelerator,
    node,
    id,
  )

export const useAwsGlobalacceleratorCustomRoutingAccelerators = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsGlobalacceleratorCustomRoutingAccelerator,
    node,
    id,
  )
