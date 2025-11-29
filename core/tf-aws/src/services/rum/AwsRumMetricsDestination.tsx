import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/rum_metrics_destination

export const InputSchema = z.object({
  app_monitor_name: resolvableValue(z.string()),
  destination: resolvableValue(z.string()),
  destination_arn: resolvableValue(z.string().optional()),
  iam_role_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRumMetricsDestination(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rum_metrics_destination'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRumMetricsDestination = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRumMetricsDestination, node, id)

export const useAwsRumMetricsDestinations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRumMetricsDestination, node, id)
