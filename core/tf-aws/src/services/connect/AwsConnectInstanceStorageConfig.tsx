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

export const InputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  resource_type: resolvableValue(z.string()),
  storage_config: resolvableValue(z.object({
    storage_type: z.string(),
    kinesis_firehose_config: z.object({
      firehose_arn: z.string(),
    }).optional(),
    kinesis_stream_config: z.object({
      stream_arn: z.string(),
    }).optional(),
    kinesis_video_stream_config: z.object({
      prefix: z.string(),
      retention_period_hours: z.number(),
      encryption_config: z.object({
        encryption_type: z.string(),
        key_id: z.string(),
      }),
    }).optional(),
    s3_config: z.object({
      bucket_name: z.string(),
      bucket_prefix: z.string(),
      encryption_config: z.object({
        encryption_type: z.string(),
        key_id: z.string(),
      }).optional(),
    }).optional(),
  })),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  association_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/connect_instance_storage_config

export function AwsConnectInstanceStorageConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_instance_storage_config'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectInstanceStorageConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsConnectInstanceStorageConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConnectInstanceStorageConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsConnectInstanceStorageConfig,
    idFilter,
    baseNode,
    optional,
  )
