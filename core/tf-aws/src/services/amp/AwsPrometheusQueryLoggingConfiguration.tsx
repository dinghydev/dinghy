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

export const AwsPrometheusQueryLoggingConfigurationInputSchema = TfMetaSchema
  .extend({
    workspace_id: resolvableValue(z.string()),
    destination: resolvableValue(
      z.object({
        cloudwatch_logs: z.object({
          log_group_arn: z.string(),
        }).array().optional(),
        filters: z.object({
          qsp_threshold: z.number(),
        }).array().optional(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsPrometheusQueryLoggingConfigurationOutputSchema = z.object({})

export type AwsPrometheusQueryLoggingConfigurationInputProps =
  & z.input<typeof AwsPrometheusQueryLoggingConfigurationInputSchema>
  & NodeProps

export type AwsPrometheusQueryLoggingConfigurationOutputProps =
  & z.output<typeof AwsPrometheusQueryLoggingConfigurationOutputSchema>
  & z.output<typeof AwsPrometheusQueryLoggingConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_query_logging_configuration

export function AwsPrometheusQueryLoggingConfiguration(
  props: Partial<AwsPrometheusQueryLoggingConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prometheus_query_logging_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPrometheusQueryLoggingConfigurationInputSchema}
      _outputSchema={AwsPrometheusQueryLoggingConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsPrometheusQueryLoggingConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPrometheusQueryLoggingConfigurationOutputProps>(
    AwsPrometheusQueryLoggingConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPrometheusQueryLoggingConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPrometheusQueryLoggingConfigurationOutputProps>(
    AwsPrometheusQueryLoggingConfiguration,
    idFilter,
    baseNode,
    optional,
  )
