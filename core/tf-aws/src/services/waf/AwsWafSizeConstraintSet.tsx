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

export const AwsWafSizeConstraintSetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
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
})

export const AwsWafSizeConstraintSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsWafSizeConstraintSetInputProps =
  & z.input<typeof AwsWafSizeConstraintSetInputSchema>
  & NodeProps

export type AwsWafSizeConstraintSetOutputProps =
  & z.output<typeof AwsWafSizeConstraintSetOutputSchema>
  & z.output<typeof AwsWafSizeConstraintSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/waf_size_constraint_set

export function AwsWafSizeConstraintSet(
  props: Partial<AwsWafSizeConstraintSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_size_constraint_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafSizeConstraintSetInputSchema}
      _outputSchema={AwsWafSizeConstraintSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafSizeConstraintSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafSizeConstraintSetOutputProps>(
    AwsWafSizeConstraintSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafSizeConstraintSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafSizeConstraintSetOutputProps>(
    AwsWafSizeConstraintSet,
    idFilter,
    baseNode,
    optional,
  )
