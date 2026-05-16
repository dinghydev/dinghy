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

export const AwsWafregionalSizeConstraintSetInputSchema = TfMetaSchema.extend({
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
})

export const AwsWafregionalSizeConstraintSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsWafregionalSizeConstraintSetInputProps =
  & z.input<typeof AwsWafregionalSizeConstraintSetInputSchema>
  & NodeProps

export type AwsWafregionalSizeConstraintSetOutputProps =
  & z.output<typeof AwsWafregionalSizeConstraintSetOutputSchema>
  & z.output<typeof AwsWafregionalSizeConstraintSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafregional_size_constraint_set

export function AwsWafregionalSizeConstraintSet(
  props: Partial<AwsWafregionalSizeConstraintSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_size_constraint_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafregionalSizeConstraintSetInputSchema}
      _outputSchema={AwsWafregionalSizeConstraintSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalSizeConstraintSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafregionalSizeConstraintSetOutputProps>(
    AwsWafregionalSizeConstraintSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafregionalSizeConstraintSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafregionalSizeConstraintSetOutputProps>(
    AwsWafregionalSizeConstraintSet,
    idFilter,
    baseNode,
    optional,
  )
