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
          }).array().optional(),
          s3_bucket: z.object({
            bucket_name: z.string(),
            prefix: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  processing_configuration: resolvableValue(
    z.object({
      audit_log: z.object({
        format: z.string(),
        schema: z.string(),
      }).array().optional(),
    }).array().optional(),
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
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appfabric_ingestion_destination

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

export const useAwsAppfabricIngestionDestination = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsAppfabricIngestionDestination,
    idFilter,
    baseNode,
  )

export const useAwsAppfabricIngestionDestinations = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsAppfabricIngestionDestination,
    idFilter,
    baseNode,
  )
