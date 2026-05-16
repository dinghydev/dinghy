import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsGlobalacceleratorAccelerator } from './AwsGlobalacceleratorAccelerator.tsx'

export const DataAwsGlobalacceleratorAcceleratorInputSchema = TfMetaSchema
  .extend({
    arn: resolvableValue(z.string().optional()),
    name: resolvableValue(z.string().optional()),
  })

export const DataAwsGlobalacceleratorAcceleratorOutputSchema = z.object({
  attributes: z.object({
    flow_logs_enabled: z.boolean(),
    flow_logs_s3_bucket: z.string(),
    flow_logs_s3_prefix: z.string(),
  }).array().optional(),
  dns_name: z.string().optional(),
  dual_stack_dns_name: z.string().optional(),
  enabled: z.boolean().optional(),
  hosted_zone_id: z.string().optional(),
  id: z.string().optional(),
  ip_address_type: z.string().optional(),
  ip_sets: z.object({
    ip_addresses: z.string().array(),
    ip_family: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsGlobalacceleratorAcceleratorInputProps =
  & z.input<typeof DataAwsGlobalacceleratorAcceleratorInputSchema>
  & NodeProps

export type DataAwsGlobalacceleratorAcceleratorOutputProps =
  & z.output<typeof DataAwsGlobalacceleratorAcceleratorOutputSchema>
  & z.output<typeof DataAwsGlobalacceleratorAcceleratorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/globalaccelerator_accelerator

export function DataAwsGlobalacceleratorAccelerator(
  props: Partial<DataAwsGlobalacceleratorAcceleratorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsGlobalacceleratorAccelerator
      _type='aws_globalaccelerator_accelerator'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsGlobalacceleratorAcceleratorInputSchema}
      _outputSchema={DataAwsGlobalacceleratorAcceleratorOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGlobalacceleratorAccelerator = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsGlobalacceleratorAcceleratorOutputProps>(
    DataAwsGlobalacceleratorAccelerator,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsGlobalacceleratorAccelerators = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsGlobalacceleratorAcceleratorOutputProps>(
    DataAwsGlobalacceleratorAccelerator,
    idFilter,
    baseNode,
    optional,
  )
