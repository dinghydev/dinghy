import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsGlobalacceleratorCustomRoutingAccelerator } from './AwsGlobalacceleratorCustomRoutingAccelerator.tsx'

export const InputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  attributes: z.object({
    flow_logs_enabled: z.boolean(),
    flow_logs_s3_bucket: z.string(),
    flow_logs_s3_prefix: z.string(),
  }).array().optional(),
  dns_name: z.string().optional(),
  enabled: z.boolean().optional(),
  hosted_zone_id: z.string().optional(),
  ip_address_type: z.string().optional(),
  ip_sets: z.object({
    ip_addresses: z.string().array(),
    ip_family: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/globalaccelerator_custom_routing_accelerator

export function DataAwsGlobalacceleratorCustomRoutingAccelerator(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsGlobalacceleratorCustomRoutingAccelerator,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsGlobalacceleratorCustomRoutingAccelerators = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsGlobalacceleratorCustomRoutingAccelerator,
    idFilter,
    baseNode,
    optional,
  )
