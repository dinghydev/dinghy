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
  access_logs: resolvableValue(z.object({
    include_trust_context: z.boolean().optional(),
    log_version: z.string().optional(),
    cloudwatch_logs: z.object({
      enabled: z.boolean(),
      log_group: z.string().optional(),
    }).optional(),
    kinesis_data_firehose: z.object({
      delivery_stream: z.string().optional(),
      enabled: z.boolean(),
    }).optional(),
    s3: z.object({
      bucket_name: z.string().optional(),
      bucket_owner: z.string().optional(),
      enabled: z.boolean(),
      prefix: z.string().optional(),
    }).optional(),
  })),
  verifiedaccess_instance_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/verifiedaccess_instance_logging_configuration

export function AwsVerifiedaccessInstanceLoggingConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedaccess_instance_logging_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedaccessInstanceLoggingConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsVerifiedaccessInstanceLoggingConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVerifiedaccessInstanceLoggingConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsVerifiedaccessInstanceLoggingConfiguration,
    idFilter,
    baseNode,
    optional,
  )
