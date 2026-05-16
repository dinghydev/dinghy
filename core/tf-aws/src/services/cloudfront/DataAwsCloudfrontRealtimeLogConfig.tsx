import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudfrontRealtimeLogConfig } from './AwsCloudfrontRealtimeLogConfig.tsx'

export const DataAwsCloudfrontRealtimeLogConfigInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
  })

export const DataAwsCloudfrontRealtimeLogConfigOutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.object({
    kinesis_stream_config: z.object({
      role_arn: z.string(),
      stream_arn: z.string(),
    }).array(),
    stream_type: z.string(),
  }).array().optional(),
  fields: z.set(z.string()).optional(),
  sampling_rate: z.number().optional(),
})

export type DataAwsCloudfrontRealtimeLogConfigInputProps =
  & z.input<typeof DataAwsCloudfrontRealtimeLogConfigInputSchema>
  & NodeProps

export type DataAwsCloudfrontRealtimeLogConfigOutputProps =
  & z.output<typeof DataAwsCloudfrontRealtimeLogConfigOutputSchema>
  & z.output<typeof DataAwsCloudfrontRealtimeLogConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudfront_realtime_log_config

export function DataAwsCloudfrontRealtimeLogConfig(
  props: Partial<DataAwsCloudfrontRealtimeLogConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudfrontRealtimeLogConfig
      _type='aws_cloudfront_realtime_log_config'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudfrontRealtimeLogConfigInputSchema}
      _outputSchema={DataAwsCloudfrontRealtimeLogConfigOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontRealtimeLogConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCloudfrontRealtimeLogConfigOutputProps>(
    DataAwsCloudfrontRealtimeLogConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudfrontRealtimeLogConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudfrontRealtimeLogConfigOutputProps>(
    DataAwsCloudfrontRealtimeLogConfig,
    idFilter,
    baseNode,
    optional,
  )
