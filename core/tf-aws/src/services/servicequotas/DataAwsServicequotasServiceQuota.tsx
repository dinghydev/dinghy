import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsServicequotasServiceQuota } from './AwsServicequotasServiceQuota.tsx'

export const DataAwsServicequotasServiceQuotaInputSchema = TfMetaSchema.extend({
  service_code: resolvableValue(z.string()),
  quota_code: resolvableValue(z.string().optional()),
  quota_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsServicequotasServiceQuotaOutputSchema = z.object({
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

export type DataAwsServicequotasServiceQuotaInputProps =
  & z.input<typeof DataAwsServicequotasServiceQuotaInputSchema>
  & NodeProps

export type DataAwsServicequotasServiceQuotaOutputProps =
  & z.output<typeof DataAwsServicequotasServiceQuotaOutputSchema>
  & z.output<typeof DataAwsServicequotasServiceQuotaInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/servicequotas_service_quota

export function DataAwsServicequotasServiceQuota(
  props: Partial<DataAwsServicequotasServiceQuotaInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsServicequotasServiceQuota
      _type='aws_servicequotas_service_quota'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServicequotasServiceQuotaInputSchema}
      _outputSchema={DataAwsServicequotasServiceQuotaOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsServicequotasServiceQuota = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsServicequotasServiceQuotaOutputProps>(
    DataAwsServicequotasServiceQuota,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServicequotasServiceQuotas = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServicequotasServiceQuotaOutputProps>(
    DataAwsServicequotasServiceQuota,
    idFilter,
    baseNode,
    optional,
  )
