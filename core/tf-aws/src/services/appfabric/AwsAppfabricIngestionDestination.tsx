import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appfabric_ingestion_destination

export const InputSchema = z.object({
  app_bundle_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  ingestion_arn: resolvableValue(z.string()),
  destination_configuration: resolvableValue(
    z.object({
      audit_log: z.object({
        destination: z.object({
          firehose_stream: z.object({
            stream_name: z.string(),
          }).optional(),
          s3_bucket: z.object({
            bucket_name: z.string(),
            prefix: z.string().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  processing_configuration: resolvableValue(
    z.object({
      audit_log: z.object({
        format: z.string(),
        schema: z.string(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppfabricIngestionDestination(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appfabric_ingestion_destination'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppfabricIngestionDestination = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppfabricIngestionDestination, node, id)

export const useAwsAppfabricIngestionDestinations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppfabricIngestionDestination, node, id)
