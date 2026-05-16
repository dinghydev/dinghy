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

export const AwsIvschatLoggingConfigurationInputSchema = TfMetaSchema.extend({
  destination_configuration: resolvableValue(
    z.object({
      cloudwatch_logs: z.object({
        log_group_name: z.string(),
      }).optional(),
      firehose: z.object({
        delivery_stream_name: z.string(),
      }).optional(),
      s3: z.object({
        bucket_name: z.string(),
      }).optional(),
    }).optional(),
  ),
  name: resolvableValue(z.string().optional()),
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

export const AwsIvschatLoggingConfigurationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsIvschatLoggingConfigurationImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsIvschatLoggingConfigurationInputProps =
  & z.input<typeof AwsIvschatLoggingConfigurationInputSchema>
  & z.input<typeof AwsIvschatLoggingConfigurationImportSchema>
  & NodeProps

export type AwsIvschatLoggingConfigurationOutputProps =
  & z.output<typeof AwsIvschatLoggingConfigurationOutputSchema>
  & z.output<typeof AwsIvschatLoggingConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ivschat_logging_configuration

export function AwsIvschatLoggingConfiguration(
  props: Partial<AwsIvschatLoggingConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ivschat_logging_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIvschatLoggingConfigurationInputSchema}
      _outputSchema={AwsIvschatLoggingConfigurationOutputSchema}
      _importSchema={AwsIvschatLoggingConfigurationImportSchema}
      {...props}
    />
  )
}

export const useAwsIvschatLoggingConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIvschatLoggingConfigurationOutputProps>(
    AwsIvschatLoggingConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIvschatLoggingConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIvschatLoggingConfigurationOutputProps>(
    AwsIvschatLoggingConfiguration,
    idFilter,
    baseNode,
    optional,
  )
