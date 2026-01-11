import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsApiGatewayApiKey } from './AwsApiGatewayApiKey.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/api_gateway_api_key

export function DataAwsApiGatewayApiKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsApiGatewayApiKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsApiGatewayApiKey,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsApiGatewayApiKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsApiGatewayApiKey,
    idFilter,
    baseNode,
    optional,
  )
