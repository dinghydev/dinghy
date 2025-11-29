import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/prometheus_alert_manager_definition

export const InputSchema = z.object({
  definition: resolvableValue(z.string()),
  workspace_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsPrometheusAlertManagerDefinition(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prometheus_alert_manager_definition'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsPrometheusAlertManagerDefinition = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsPrometheusAlertManagerDefinition, node, id)

export const useAwsPrometheusAlertManagerDefinitions = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsPrometheusAlertManagerDefinition, node, id)
