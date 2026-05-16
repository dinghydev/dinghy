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

export const AwsInternetmonitorMonitorInputSchema = TfMetaSchema.extend({
  monitor_name: resolvableValue(z.string()),
  health_events_config: resolvableValue(
    z.object({
      availability_score_threshold: z.number().optional(),
      performance_score_threshold: z.number().optional(),
    }).optional(),
  ),
  internet_measurements_log_delivery: resolvableValue(
    z.object({
      s3_config: z.object({
        bucket_name: z.string(),
        bucket_prefix: z.string().optional(),
        log_delivery_status: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  max_city_networks_to_monitor: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  resources: resolvableValue(z.string().array().optional()),
  status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  traffic_percentage_to_monitor: resolvableValue(z.number().optional()),
})

export const AwsInternetmonitorMonitorOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsInternetmonitorMonitorInputProps =
  & z.input<typeof AwsInternetmonitorMonitorInputSchema>
  & NodeProps

export type AwsInternetmonitorMonitorOutputProps =
  & z.output<typeof AwsInternetmonitorMonitorOutputSchema>
  & z.output<typeof AwsInternetmonitorMonitorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/internetmonitor_monitor

export function AwsInternetmonitorMonitor(
  props: Partial<AwsInternetmonitorMonitorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_internetmonitor_monitor'
      _category='resource'
      _title={_title}
      _inputSchema={AwsInternetmonitorMonitorInputSchema}
      _outputSchema={AwsInternetmonitorMonitorOutputSchema}
      {...props}
    />
  )
}

export const useAwsInternetmonitorMonitor = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsInternetmonitorMonitorOutputProps>(
    AwsInternetmonitorMonitor,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsInternetmonitorMonitors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsInternetmonitorMonitorOutputProps>(
    AwsInternetmonitorMonitor,
    idFilter,
    baseNode,
    optional,
  )
