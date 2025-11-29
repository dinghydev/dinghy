import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafv2RegexPatternSet } from './AwsWafv2RegexPatternSet.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/wafv2_regex_pattern_set

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  scope: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  regular_expression: z.object({
    regex_string: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsWafv2RegexPatternSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsWafv2RegexPatternSet
      _type='aws_wafv2_regex_pattern_set'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafv2RegexPatternSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsWafv2RegexPatternSet, node, id)

export const useDataAwsWafv2RegexPatternSets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsWafv2RegexPatternSet, node, id)
