import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudfrontRealtimeLogConfig } from './AwsCloudfrontRealtimeLogConfig.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudfront_realtime_log_config

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.object({
    kinesis_stream_config: z.object({
      role_arn: z.string(),
      stream_arn: z.string(),
    }).array(),
    stream_type: z.string(),
  }).array().optional(),
  fields: z.string().array().optional(),
  sampling_rate: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCloudfrontRealtimeLogConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsCloudfrontRealtimeLogConfig, node, id)

export const useDataAwsCloudfrontRealtimeLogConfigs = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsCloudfrontRealtimeLogConfig, node, id)
