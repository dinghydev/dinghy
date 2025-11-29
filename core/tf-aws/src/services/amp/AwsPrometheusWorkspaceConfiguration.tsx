import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/prometheus_workspace_configuration

export const InputSchema = z.object({
  workspace_id: resolvableValue(z.string()),
  limits_per_label_set: resolvableValue(
    z.object({
      label_set: z.record(z.string(), z.string()),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  retention_period_in_days: resolvableValue(z.number().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsPrometheusWorkspaceConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prometheus_workspace_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsPrometheusWorkspaceConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsPrometheusWorkspaceConfiguration, node, id)

export const useAwsPrometheusWorkspaceConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsPrometheusWorkspaceConfiguration, node, id)
