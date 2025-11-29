import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsServicequotasServiceQuota } from './AwsServicequotasServiceQuota.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/servicequotas_service_quota

export const InputSchema = z.object({
  service_code: resolvableValue(z.string()),
  quota_code: resolvableValue(z.string().optional()),
  quota_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  adjustable: z.boolean().optional(),
  arn: z.string().optional(),
  default_value: z.number().optional(),
  global_quota: z.boolean().optional(),
  id: z.string().optional(),
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
  value: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsServicequotasServiceQuota(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsServicequotasServiceQuota
      _type='aws_servicequotas_service_quota'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsServicequotasServiceQuota = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsServicequotasServiceQuota, node, id)

export const useDataAwsServicequotasServiceQuotas = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsServicequotasServiceQuota, node, id)
