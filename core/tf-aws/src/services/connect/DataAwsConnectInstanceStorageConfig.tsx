import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectInstanceStorageConfig } from './AwsConnectInstanceStorageConfig.tsx'

export const InputSchema = z.object({
  association_id: resolvableValue(z.string()),
  instance_id: resolvableValue(z.string()),
  resource_type: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  storage_config: z.object({
    kinesis_firehose_config: z.object({
      firehose_arn: z.string(),
    }).array(),
    kinesis_stream_config: z.object({
      stream_arn: z.string(),
    }).array(),
    kinesis_video_stream_config: z.object({
      encryption_config: z.object({
        encryption_type: z.string(),
        key_id: z.string(),
      }).array(),
      prefix: z.string(),
      retention_period_hours: z.number(),
    }).array(),
    s3_config: z.object({
      bucket_name: z.string(),
      bucket_prefix: z.string(),
      encryption_config: z.object({
        encryption_type: z.string(),
        key_id: z.string(),
      }).array(),
    }).array(),
    storage_type: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/connect_instance_storage_config

export function DataAwsConnectInstanceStorageConfig(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsConnectInstanceStorageConfig
      _type='aws_connect_instance_storage_config'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectInstanceStorageConfig = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    DataAwsConnectInstanceStorageConfig,
    idFilter,
    baseNode,
  )

export const useDataAwsConnectInstanceStorageConfigs = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    DataAwsConnectInstanceStorageConfig,
    idFilter,
    baseNode,
  )
