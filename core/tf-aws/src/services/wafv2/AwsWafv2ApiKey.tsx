import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/wafv2_api_key

export const InputSchema = z.object({
  api_key: resolvableValue(z.string()),
  scope: resolvableValue(z.string()),
  token_domains: resolvableValue(z.string().array()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWafv2ApiKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_api_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafv2ApiKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWafv2ApiKey, node, id)

export const useAwsWafv2ApiKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsWafv2ApiKey, node, id)
