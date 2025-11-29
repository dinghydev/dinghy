import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_realtime_log_config

export const InputSchema = z.object({
  endpoint: resolvableValue(z.object({
    stream_type: z.string(),
  })),
  fields: resolvableValue(z.string().array()),
  name: resolvableValue(z.string()),
  sampling_rate: resolvableValue(z.number()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
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

export function AwsCloudfrontRealtimeLogConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_realtime_log_config'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontRealtimeLogConfig = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudfrontRealtimeLogConfig, node, id)

export const useAwsCloudfrontRealtimeLogConfigs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudfrontRealtimeLogConfig, node, id)
