import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudwatch_log_anomaly_detector

export const InputSchema = z.object({
  enabled: resolvableValue(z.boolean()),
  log_group_arn_list: resolvableValue(z.string().array()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  anomaly_visibility_time: resolvableValue(z.number().optional()),
  detector_name: resolvableValue(z.string().optional()),
  evaluation_frequency: resolvableValue(z.string().optional()),
  filter_pattern: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudwatchLogAnomalyDetector(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_anomaly_detector'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogAnomalyDetector = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudwatchLogAnomalyDetector, node, id)

export const useAwsCloudwatchLogAnomalyDetectors = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudwatchLogAnomalyDetector, node, id)
