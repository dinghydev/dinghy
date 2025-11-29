import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/waf_size_constraint_set

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  size_constraints: resolvableValue(
    z.object({
      comparison_operator: z.string(),
      size: z.number(),
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

export function AwsWafSizeConstraintSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_size_constraint_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafSizeConstraintSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWafSizeConstraintSet, node, id)

export const useAwsWafSizeConstraintSets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsWafSizeConstraintSet, node, id)
