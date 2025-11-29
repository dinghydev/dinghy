import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/wafregional_byte_match_set

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  byte_match_tuples: resolvableValue(
    z.object({
      positional_constraint: z.string(),
      target_string: z.string().optional(),
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

export function AwsWafregionalByteMatchSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_byte_match_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalByteMatchSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWafregionalByteMatchSet, node, id)

export const useAwsWafregionalByteMatchSets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsWafregionalByteMatchSet, node, id)
