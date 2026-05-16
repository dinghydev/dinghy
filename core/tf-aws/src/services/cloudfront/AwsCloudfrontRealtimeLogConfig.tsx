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

export const AwsCloudfrontRealtimeLogConfigInputSchema = TfMetaSchema.extend({
  endpoint: resolvableValue(z.object({
    stream_type: z.string(),
    kinesis_stream_config: z.object({
      role_arn: z.string(),
      stream_arn: z.string(),
    }),
  })),
  fields: resolvableValue(z.string().array()),
  name: resolvableValue(z.string()),
  sampling_rate: resolvableValue(z.number()),
})

export const AwsCloudfrontRealtimeLogConfigOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export const AwsCloudfrontRealtimeLogConfigImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCloudfrontRealtimeLogConfigInputProps =
  & z.input<typeof AwsCloudfrontRealtimeLogConfigInputSchema>
  & z.input<typeof AwsCloudfrontRealtimeLogConfigImportSchema>
  & NodeProps

export type AwsCloudfrontRealtimeLogConfigOutputProps =
  & z.output<typeof AwsCloudfrontRealtimeLogConfigOutputSchema>
  & z.output<typeof AwsCloudfrontRealtimeLogConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_realtime_log_config

export function AwsCloudfrontRealtimeLogConfig(
  props: Partial<AwsCloudfrontRealtimeLogConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_realtime_log_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontRealtimeLogConfigInputSchema}
      _outputSchema={AwsCloudfrontRealtimeLogConfigOutputSchema}
      _importSchema={AwsCloudfrontRealtimeLogConfigImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontRealtimeLogConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontRealtimeLogConfigOutputProps>(
    AwsCloudfrontRealtimeLogConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontRealtimeLogConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudfrontRealtimeLogConfigOutputProps>(
    AwsCloudfrontRealtimeLogConfig,
    idFilter,
    baseNode,
    optional,
  )
