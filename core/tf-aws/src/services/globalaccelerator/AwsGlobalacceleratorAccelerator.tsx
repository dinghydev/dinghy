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

export const AwsGlobalacceleratorAcceleratorInputSchema = TfMetaSchema.extend({
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
})

export const AwsGlobalacceleratorAcceleratorOutputSchema = z.object({
  arn: z.string().optional(),
  dns_name: z.string().optional(),
  dual_stack_dns_name: z.string().optional(),
  hosted_zone_id: z.string().optional(),
  id: z.string().optional(),
  ip_addresses: z.string().array().optional(),
  ip_sets: z.object({
    ip_addresses: z.string().array(),
    ip_family: z.string(),
  }).array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsGlobalacceleratorAcceleratorImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsGlobalacceleratorAcceleratorInputProps =
  & z.input<typeof AwsGlobalacceleratorAcceleratorInputSchema>
  & z.input<typeof AwsGlobalacceleratorAcceleratorImportSchema>
  & NodeProps

export type AwsGlobalacceleratorAcceleratorOutputProps =
  & z.output<typeof AwsGlobalacceleratorAcceleratorOutputSchema>
  & z.output<typeof AwsGlobalacceleratorAcceleratorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/globalaccelerator_accelerator

export function AwsGlobalacceleratorAccelerator(
  props: Partial<AwsGlobalacceleratorAcceleratorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_globalaccelerator_accelerator'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlobalacceleratorAcceleratorInputSchema}
      _outputSchema={AwsGlobalacceleratorAcceleratorOutputSchema}
      _importSchema={AwsGlobalacceleratorAcceleratorImportSchema}
      {...props}
    />
  )
}

export const useAwsGlobalacceleratorAccelerator = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlobalacceleratorAcceleratorOutputProps>(
    AwsGlobalacceleratorAccelerator,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlobalacceleratorAccelerators = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlobalacceleratorAcceleratorOutputProps>(
    AwsGlobalacceleratorAccelerator,
    idFilter,
    baseNode,
    optional,
  )
