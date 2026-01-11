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
  max_units: resolvableValue(z.number()),
  min_units: resolvableValue(z.number()),
  pipeline_configuration_body: resolvableValue(z.string()),
  pipeline_name: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  buffer_options: resolvableValue(
    z.object({
      persistent_buffer_enabled: z.boolean(),
    }).array().optional(),
  ),
  encryption_at_rest_options: resolvableValue(
    z.object({
      kms_key_arn: z.string(),
    }).array().optional(),
  ),
  log_publishing_options: resolvableValue(
    z.object({
      is_logging_enabled: z.boolean().optional(),
      cloudwatch_log_destination: z.object({
        log_group: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  pipeline_role_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_options: resolvableValue(
    z.object({
      security_group_ids: z.string().array().optional(),
      subnet_ids: z.string().array(),
      vpc_endpoint_management: z.string().optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  ingest_endpoint_urls: z.set(z.string()).optional(),
  pipeline_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/osis_pipeline

export function AwsOsisPipeline(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_osis_pipeline'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsOsisPipeline = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsOsisPipeline, idFilter, baseNode, optional)

export const useAwsOsisPipelines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsOsisPipeline, idFilter, baseNode, optional)
