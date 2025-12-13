import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  size_constraints: resolvableValue(
    z.object({
      comparison_operator: z.string(),
      size: z.number(),
      text_transformation: z.string(),
      field_to_match: z.object({
        data: z.string().optional(),
        type: z.string(),
      }),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/wafregional_size_constraint_set

export function AwsWafregionalSizeConstraintSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_size_constraint_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalSizeConstraintSet = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(AwsWafregionalSizeConstraintSet, idFilter, baseNode)

export const useAwsWafregionalSizeConstraintSets = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsWafregionalSizeConstraintSet,
    idFilter,
    baseNode,
  )
