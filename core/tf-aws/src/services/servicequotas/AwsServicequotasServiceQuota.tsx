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

export const AwsServicequotasServiceQuotaInputSchema = TfMetaSchema.extend({
  quota_code: resolvableValue(z.string()),
  service_code: resolvableValue(z.string()),
  value: resolvableValue(z.number()),
  region: resolvableValue(z.string().optional()),
})

export const AwsServicequotasServiceQuotaOutputSchema = z.object({
  adjustable: z.boolean().optional(),
  arn: z.string().optional(),
  default_value: z.number().optional(),
  id: z.string().optional(),
  quota_name: z.string().optional(),
  request_id: z.string().optional(),
  request_status: z.string().optional(),
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

export type AwsServicequotasServiceQuotaInputProps =
  & z.input<typeof AwsServicequotasServiceQuotaInputSchema>
  & NodeProps

export type AwsServicequotasServiceQuotaOutputProps =
  & z.output<typeof AwsServicequotasServiceQuotaOutputSchema>
  & z.output<typeof AwsServicequotasServiceQuotaInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicequotas_service_quota

export function AwsServicequotasServiceQuota(
  props: Partial<AwsServicequotasServiceQuotaInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicequotas_service_quota'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicequotasServiceQuotaInputSchema}
      _outputSchema={AwsServicequotasServiceQuotaOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicequotasServiceQuota = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicequotasServiceQuotaOutputProps>(
    AwsServicequotasServiceQuota,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicequotasServiceQuotas = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicequotasServiceQuotaOutputProps>(
    AwsServicequotasServiceQuota,
    idFilter,
    baseNode,
    optional,
  )
