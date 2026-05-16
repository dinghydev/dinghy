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

export const AwsApiGatewayUsagePlanInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  api_stages: resolvableValue(
    z.object({
      api_id: z.string(),
      stage: z.string(),
      throttle: z.object({
        burst_limit: z.number().optional(),
        path: z.string(),
        rate_limit: z.number().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  product_code: resolvableValue(z.string().optional()),
  quota_settings: resolvableValue(
    z.object({
      limit: z.number(),
      offset: z.number().optional(),
      period: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  throttle_settings: resolvableValue(
    z.object({
      burst_limit: z.number().optional(),
      rate_limit: z.number().optional(),
    }).optional(),
  ),
})

export const AwsApiGatewayUsagePlanOutputSchema = z.object({
  api_stages: z.object({
    api_id: z.string(),
    stage: z.string(),
    throttle: z.object({
      burst_limit: z.number().optional(),
      path: z.string(),
      rate_limit: z.number().optional(),
    }).array().optional(),
  }).array().optional().optional(),
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  product_code: z.string().optional(),
  quota_settings: z.object({
    limit: z.number(),
    offset: z.number().optional(),
    period: z.string(),
  }).optional().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  throttle_settings: z.object({
    burst_limit: z.number().optional(),
    rate_limit: z.number().optional(),
  }).optional().optional(),
})

export type AwsApiGatewayUsagePlanInputProps =
  & z.input<typeof AwsApiGatewayUsagePlanInputSchema>
  & NodeProps

export type AwsApiGatewayUsagePlanOutputProps =
  & z.output<typeof AwsApiGatewayUsagePlanOutputSchema>
  & z.output<typeof AwsApiGatewayUsagePlanInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_usage_plan

export function AwsApiGatewayUsagePlan(
  props: Partial<AwsApiGatewayUsagePlanInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_usage_plan'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayUsagePlanInputSchema}
      _outputSchema={AwsApiGatewayUsagePlanOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayUsagePlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayUsagePlanOutputProps>(
    AwsApiGatewayUsagePlan,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayUsagePlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayUsagePlanOutputProps>(
    AwsApiGatewayUsagePlan,
    idFilter,
    baseNode,
    optional,
  )
