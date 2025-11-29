import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/api_gateway_usage_plan_key

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  key_id: z.string().optional(),
  key_type: z.string().optional(),
  name: z.string().optional(),
  usage_plan_id: z.string().optional(),
  value: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApiGatewayUsagePlanKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_usage_plan_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayUsagePlanKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApiGatewayUsagePlanKey, node, id)

export const useAwsApiGatewayUsagePlanKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApiGatewayUsagePlanKey, node, id)
