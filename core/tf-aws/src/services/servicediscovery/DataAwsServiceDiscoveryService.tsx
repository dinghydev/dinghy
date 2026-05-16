import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsServiceDiscoveryService } from './AwsServiceDiscoveryService.tsx'

export const DataAwsServiceDiscoveryServiceInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  namespace_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsServiceDiscoveryServiceOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  dns_config: z.object({
    dns_records: z.object({
      ttl: z.number(),
      type: z.string(),
    }).array(),
    namespace_id: z.string(),
    routing_policy: z.string(),
  }).array().optional(),
  health_check_config: z.object({
    failure_threshold: z.number(),
    resource_path: z.string(),
    type: z.string(),
  }).array().optional(),
  health_check_custom_config: z.object({
    failure_threshold: z.number(),
  }).array().optional(),
  id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsServiceDiscoveryServiceInputProps =
  & z.input<typeof DataAwsServiceDiscoveryServiceInputSchema>
  & NodeProps

export type DataAwsServiceDiscoveryServiceOutputProps =
  & z.output<typeof DataAwsServiceDiscoveryServiceOutputSchema>
  & z.output<typeof DataAwsServiceDiscoveryServiceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/service_discovery_service

export function DataAwsServiceDiscoveryService(
  props: Partial<DataAwsServiceDiscoveryServiceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsServiceDiscoveryService
      _type='aws_service_discovery_service'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServiceDiscoveryServiceInputSchema}
      _outputSchema={DataAwsServiceDiscoveryServiceOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsServiceDiscoveryService = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsServiceDiscoveryServiceOutputProps>(
    DataAwsServiceDiscoveryService,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServiceDiscoveryServices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServiceDiscoveryServiceOutputProps>(
    DataAwsServiceDiscoveryService,
    idFilter,
    baseNode,
    optional,
  )
