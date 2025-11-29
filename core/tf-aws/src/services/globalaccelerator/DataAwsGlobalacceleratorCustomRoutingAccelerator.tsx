import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsGlobalacceleratorCustomRoutingAccelerator } from './AwsGlobalacceleratorCustomRoutingAccelerator.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/globalaccelerator_custom_routing_accelerator

export const InputSchema = z.object({
  attributes: resolvableValue(
    z.object({
      flow_logs_enabled: z.boolean(),
      flow_logs_s3_bucket: z.string(),
      flow_logs_s3_prefix: z.string(),
    }).array(),
  ),
  dns_name: resolvableValue(z.string()),
  enabled: resolvableValue(z.boolean()),
  hosted_zone_id: resolvableValue(z.string()),
  ip_address_type: resolvableValue(z.string()),
  ip_sets: resolvableValue(
    z.object({
      ip_addresses: z.string().array(),
      ip_family: z.string(),
    }).array(),
  ),
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsGlobalacceleratorCustomRoutingAccelerator(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsGlobalacceleratorCustomRoutingAccelerator
      _type='aws_globalaccelerator_custom_routing_accelerator'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGlobalacceleratorCustomRoutingAccelerator = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    DataAwsGlobalacceleratorCustomRoutingAccelerator,
    node,
    id,
  )

export const useDataAwsGlobalacceleratorCustomRoutingAccelerators = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    DataAwsGlobalacceleratorCustomRoutingAccelerator,
    node,
    id,
  )
