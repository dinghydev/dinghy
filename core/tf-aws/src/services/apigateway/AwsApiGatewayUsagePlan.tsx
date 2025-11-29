import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/api_gateway_usage_plan

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  api_stages: z.object({
    api_id: z.string(),
    stage: z.string(),
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApiGatewayUsagePlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_usage_plan'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayUsagePlan = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApiGatewayUsagePlan, node, id)

export const useAwsApiGatewayUsagePlans = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApiGatewayUsagePlan, node, id)
