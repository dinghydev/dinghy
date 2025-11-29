import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/wafv2_regex_pattern_set

export const InputSchema = z.object({
  lock_token: resolvableValue(z.string()),
  scope: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  regular_expression: resolvableValue(
    z.object({
      regex_string: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWafv2RegexPatternSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_regex_pattern_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafv2RegexPatternSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWafv2RegexPatternSet, node, id)

export const useAwsWafv2RegexPatternSets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsWafv2RegexPatternSet, node, id)
