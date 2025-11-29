import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/api_gateway_sdk

export const InputSchema = z.object({
  rest_api_id: resolvableValue(z.string()),
  sdk_type: resolvableValue(z.string()),
  stage_name: resolvableValue(z.string()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  body: z.string().optional(),
  content_disposition: z.string().optional(),
  content_type: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsApiGatewaySdk(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_sdk'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsApiGatewaySdk = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsApiGatewaySdk, node, id)

export const useDataAwsApiGatewaySdks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsApiGatewaySdk, node, id)
