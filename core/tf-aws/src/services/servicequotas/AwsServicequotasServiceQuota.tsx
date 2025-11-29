import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/servicequotas_service_quota

export const InputSchema = z.object({
  quota_code: resolvableValue(z.string()),
  request_id: resolvableValue(z.string()),
  request_status: resolvableValue(z.string()),
  service_code: resolvableValue(z.string()),
  value: resolvableValue(z.number()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  adjustable: z.boolean().optional(),
  arn: z.string().optional(),
  default_value: z.number().optional(),
  id: z.string().optional(),
  quota_name: z.string().optional(),
  service_name: z.string().optional(),
  usage_metric: z.object({
    metric_dimensions: z.object({
      class: z.string(),
      resource: z.string(),
      service: z.string(),
      type: z.string(),
    }).array(),
    metric_name: z.string(),
    metric_namespace: z.string(),
    metric_statistic_recommendation: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsServicequotasServiceQuota(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicequotas_service_quota'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsServicequotasServiceQuota = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsServicequotasServiceQuota, node, id)

export const useAwsServicequotasServiceQuotas = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsServicequotasServiceQuota, node, id)
