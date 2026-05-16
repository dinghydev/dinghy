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

export const AwsRumAppMonitorInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  app_monitor_configuration: resolvableValue(
    z.object({
      allow_cookies: z.boolean().optional(),
      enable_xray: z.boolean().optional(),
      excluded_pages: z.string().array().optional(),
      favorite_pages: z.string().array().optional(),
      guest_role_arn: z.string().optional(),
      identity_pool_id: z.string().optional(),
      included_pages: z.string().array().optional(),
      session_sample_rate: z.number().optional(),
      telemetries: z.string().array().optional(),
    }).optional(),
  ),
  custom_events: resolvableValue(
    z.object({
      status: z.string().optional(),
    }).optional(),
  ),
  cw_log_enabled: resolvableValue(z.boolean().optional()),
  domain: resolvableValue(z.string().optional()),
  domain_list: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsRumAppMonitorOutputSchema = z.object({
  app_monitor_id: z.string().optional(),
  arn: z.string().optional(),
  cw_log_group: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRumAppMonitorInputProps =
  & z.input<typeof AwsRumAppMonitorInputSchema>
  & NodeProps

export type AwsRumAppMonitorOutputProps =
  & z.output<typeof AwsRumAppMonitorOutputSchema>
  & z.output<typeof AwsRumAppMonitorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/rum_app_monitor

export function AwsRumAppMonitor(props: Partial<AwsRumAppMonitorInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rum_app_monitor'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRumAppMonitorInputSchema}
      _outputSchema={AwsRumAppMonitorOutputSchema}
      {...props}
    />
  )
}

export const useAwsRumAppMonitor = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRumAppMonitorOutputProps>(
    AwsRumAppMonitor,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRumAppMonitors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRumAppMonitorOutputProps>(
    AwsRumAppMonitor,
    idFilter,
    baseNode,
    optional,
  )
