import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/waf_sql_injection_match_set

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  sql_injection_match_tuples: resolvableValue(
    z.object({
      text_transformation: z.string(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWafSqlInjectionMatchSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_sql_injection_match_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafSqlInjectionMatchSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWafSqlInjectionMatchSet, node, id)

export const useAwsWafSqlInjectionMatchSets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsWafSqlInjectionMatchSet, node, id)
