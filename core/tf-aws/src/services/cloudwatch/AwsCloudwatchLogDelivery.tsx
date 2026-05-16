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

export const AwsCloudwatchLogDeliveryInputSchema = TfMetaSchema.extend({
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
})

export const AwsCloudwatchLogDeliveryOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudwatchLogDeliveryInputProps =
  & z.input<typeof AwsCloudwatchLogDeliveryInputSchema>
  & NodeProps

export type AwsCloudwatchLogDeliveryOutputProps =
  & z.output<typeof AwsCloudwatchLogDeliveryOutputSchema>
  & z.output<typeof AwsCloudwatchLogDeliveryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery

export function AwsCloudwatchLogDelivery(
  props: Partial<AwsCloudwatchLogDeliveryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_delivery'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogDeliveryInputSchema}
      _outputSchema={AwsCloudwatchLogDeliveryOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogDelivery = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogDeliveryOutputProps>(
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
  useTypedNodes<AwsCloudwatchLogDeliveryOutputProps>(
    AwsCloudwatchLogDelivery,
    idFilter,
    baseNode,
    optional,
  )
