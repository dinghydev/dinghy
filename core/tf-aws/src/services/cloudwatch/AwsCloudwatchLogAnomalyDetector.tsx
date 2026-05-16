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

export const AwsCloudwatchLogAnomalyDetectorInputSchema = TfMetaSchema.extend({
  enabled: resolvableValue(z.boolean()),
  log_group_arn_list: resolvableValue(z.string().array()),
  anomaly_visibility_time: resolvableValue(z.number().optional()),
  detector_name: resolvableValue(z.string().optional()),
  evaluation_frequency: resolvableValue(z.string().optional()),
  filter_pattern: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCloudwatchLogAnomalyDetectorOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudwatchLogAnomalyDetectorInputProps =
  & z.input<typeof AwsCloudwatchLogAnomalyDetectorInputSchema>
  & NodeProps

export type AwsCloudwatchLogAnomalyDetectorOutputProps =
  & z.output<typeof AwsCloudwatchLogAnomalyDetectorOutputSchema>
  & z.output<typeof AwsCloudwatchLogAnomalyDetectorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_anomaly_detector

export function AwsCloudwatchLogAnomalyDetector(
  props: Partial<AwsCloudwatchLogAnomalyDetectorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_anomaly_detector'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogAnomalyDetectorInputSchema}
      _outputSchema={AwsCloudwatchLogAnomalyDetectorOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogAnomalyDetector = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogAnomalyDetectorOutputProps>(
    AwsCloudwatchLogAnomalyDetector,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogAnomalyDetectors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogAnomalyDetectorOutputProps>(
    AwsCloudwatchLogAnomalyDetector,
    idFilter,
    baseNode,
    optional,
  )
