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

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudfront_realtime_log_config

export function DataAwsCloudfrontRealtimeLogConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudfrontRealtimeLogConfig
      _type='aws_cloudfront_realtime_log_config'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontRealtimeLogConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsCloudfrontRealtimeLogConfig,
    idFilter,
    baseNode,
    optional,
  )
