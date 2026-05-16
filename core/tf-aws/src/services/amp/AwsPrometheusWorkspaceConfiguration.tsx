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

export const AwsPrometheusWorkspaceConfigurationInputSchema = TfMetaSchema
  .extend({
    workspace_id: resolvableValue(z.string()),
    limits_per_label_set: resolvableValue(
      z.object({
        label_set: z.record(z.string(), z.string()),
        limits: z.object({
          max_series: z.number(),
        }).array().optional(),
      }).array().optional(),
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

export const AwsPrometheusWorkspaceConfigurationOutputSchema = z.object({})

export type AwsPrometheusWorkspaceConfigurationInputProps =
  & z.input<typeof AwsPrometheusWorkspaceConfigurationInputSchema>
  & NodeProps

export type AwsPrometheusWorkspaceConfigurationOutputProps =
  & z.output<typeof AwsPrometheusWorkspaceConfigurationOutputSchema>
  & z.output<typeof AwsPrometheusWorkspaceConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_workspace_configuration

export function AwsPrometheusWorkspaceConfiguration(
  props: Partial<AwsPrometheusWorkspaceConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prometheus_workspace_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPrometheusWorkspaceConfigurationInputSchema}
      _outputSchema={AwsPrometheusWorkspaceConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsPrometheusWorkspaceConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPrometheusWorkspaceConfigurationOutputProps>(
    AwsPrometheusWorkspaceConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPrometheusWorkspaceConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPrometheusWorkspaceConfigurationOutputProps>(
    AwsPrometheusWorkspaceConfiguration,
    idFilter,
    baseNode,
    optional,
  )
