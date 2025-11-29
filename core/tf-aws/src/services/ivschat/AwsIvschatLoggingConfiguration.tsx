import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ivschat_logging_configuration

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
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

export function AwsIvschatLoggingConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ivschat_logging_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsIvschatLoggingConfiguration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIvschatLoggingConfiguration, node, id)

export const useAwsIvschatLoggingConfigurations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIvschatLoggingConfiguration, node, id)
