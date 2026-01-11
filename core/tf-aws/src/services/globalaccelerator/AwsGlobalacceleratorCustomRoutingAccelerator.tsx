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
  ip_addresses: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  dns_name: z.string().optional(),
  hosted_zone_id: z.string().optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/globalaccelerator_custom_routing_accelerator

export function AwsGlobalacceleratorCustomRoutingAccelerator(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsGlobalacceleratorCustomRoutingAccelerator,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlobalacceleratorCustomRoutingAccelerators = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsGlobalacceleratorCustomRoutingAccelerator,
    idFilter,
    baseNode,
    optional,
  )
