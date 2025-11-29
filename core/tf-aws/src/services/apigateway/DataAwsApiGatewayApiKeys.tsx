import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/api_gateway_api_keys

export const InputSchema = z.object({
  customer_id: resolvableValue(z.string().optional()),
  include_values: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  items: z.object({
    created_date: z.string(),
    customer_id: z.string(),
    description: z.string(),
    enabled: z.boolean(),
    id: z.string(),
    last_updated_date: z.string(),
    name: z.string(),
    stage_keys: z.string().array(),
    tags: z.record(z.string(), z.string()),
    value: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsApiGatewayApiKeys(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_api_keys'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsApiGatewayApiKeyss = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsApiGatewayApiKeys, node, id)
