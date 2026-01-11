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
  delivery_destination_arn: resolvableValue(z.string()),
  delivery_source_name: resolvableValue(z.string()),
  field_delimiter: resolvableValue(z.string().optional()),
  record_fields: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  s3_delivery_configuration: resolvableValue(
    z.object({
      enable_hive_compatible_path: z.boolean(),
      suffix_path: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudwatch_log_delivery

export function AwsCloudwatchLogDelivery(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_delivery'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogDelivery = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudwatchLogDelivery,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogDeliverys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudwatchLogDelivery,
    idFilter,
    baseNode,
    optional,
  )
