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

export const AwsPrometheusAlertManagerDefinitionInputSchema = TfMetaSchema
  .extend({
    definition: resolvableValue(z.string()),
    workspace_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsPrometheusAlertManagerDefinitionOutputSchema = z.object({})

export type AwsPrometheusAlertManagerDefinitionInputProps =
  & z.input<typeof AwsPrometheusAlertManagerDefinitionInputSchema>
  & NodeProps

export type AwsPrometheusAlertManagerDefinitionOutputProps =
  & z.output<typeof AwsPrometheusAlertManagerDefinitionOutputSchema>
  & z.output<typeof AwsPrometheusAlertManagerDefinitionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_alert_manager_definition

export function AwsPrometheusAlertManagerDefinition(
  props: Partial<AwsPrometheusAlertManagerDefinitionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prometheus_alert_manager_definition'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPrometheusAlertManagerDefinitionInputSchema}
      _outputSchema={AwsPrometheusAlertManagerDefinitionOutputSchema}
      {...props}
    />
  )
}

export const useAwsPrometheusAlertManagerDefinition = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPrometheusAlertManagerDefinitionOutputProps>(
    AwsPrometheusAlertManagerDefinition,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPrometheusAlertManagerDefinitions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPrometheusAlertManagerDefinitionOutputProps>(
    AwsPrometheusAlertManagerDefinition,
    idFilter,
    baseNode,
    optional,
  )
