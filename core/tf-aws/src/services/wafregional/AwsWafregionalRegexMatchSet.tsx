import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/wafregional_regex_match_set

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  regex_match_tuple: resolvableValue(
    z.object({
      regex_pattern_set_id: z.string(),
      text_transformation: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWafregionalRegexMatchSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_regex_match_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalRegexMatchSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWafregionalRegexMatchSet, node, id)

export const useAwsWafregionalRegexMatchSets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsWafregionalRegexMatchSet, node, id)
