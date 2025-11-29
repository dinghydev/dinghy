import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsApiGatewayApiKey } from './AwsApiGatewayApiKey.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/api_gateway_api_key

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  created_date: z.string().optional(),
  customer_id: z.string().optional(),
  description: z.string().optional(),
  enabled: z.boolean().optional(),
  id: z.string().optional(),
  last_updated_date: z.string().optional(),
  name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  value: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsApiGatewayApiKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsApiGatewayApiKey
      _type='aws_api_gateway_api_key'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsApiGatewayApiKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsApiGatewayApiKey, node, id)

export const useDataAwsApiGatewayApiKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsApiGatewayApiKey, node, id)
