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

export const AwsCeAnomalyMonitorInputSchema = TfMetaSchema.extend({
  monitor_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  monitor_dimension: resolvableValue(z.string().optional()),
  monitor_specification: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCeAnomalyMonitorOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsCeAnomalyMonitorImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCeAnomalyMonitorInputProps =
  & z.input<typeof AwsCeAnomalyMonitorInputSchema>
  & z.input<typeof AwsCeAnomalyMonitorImportSchema>
  & NodeProps

export type AwsCeAnomalyMonitorOutputProps =
  & z.output<typeof AwsCeAnomalyMonitorOutputSchema>
  & z.output<typeof AwsCeAnomalyMonitorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ce_anomaly_monitor

export function AwsCeAnomalyMonitor(
  props: Partial<AwsCeAnomalyMonitorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ce_anomaly_monitor'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCeAnomalyMonitorInputSchema}
      _outputSchema={AwsCeAnomalyMonitorOutputSchema}
      _importSchema={AwsCeAnomalyMonitorImportSchema}
      {...props}
    />
  )
}

export const useAwsCeAnomalyMonitor = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCeAnomalyMonitorOutputProps>(
    AwsCeAnomalyMonitor,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCeAnomalyMonitors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCeAnomalyMonitorOutputProps>(
    AwsCeAnomalyMonitor,
    idFilter,
    baseNode,
    optional,
  )
