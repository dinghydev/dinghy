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

export const AwsWafRegexMatchSetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  regex_match_tuple: resolvableValue(
    z.object({
      regex_pattern_set_id: z.string(),
      text_transformation: z.string(),
      field_to_match: z.object({
        data: z.string().optional(),
        type: z.string(),
      }),
    }).array().optional(),
  ),
})

export const AwsWafRegexMatchSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsWafRegexMatchSetInputProps =
  & z.input<typeof AwsWafRegexMatchSetInputSchema>
  & NodeProps

export type AwsWafRegexMatchSetOutputProps =
  & z.output<typeof AwsWafRegexMatchSetOutputSchema>
  & z.output<typeof AwsWafRegexMatchSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/waf_regex_match_set

export function AwsWafRegexMatchSet(
  props: Partial<AwsWafRegexMatchSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_regex_match_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafRegexMatchSetInputSchema}
      _outputSchema={AwsWafRegexMatchSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafRegexMatchSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafRegexMatchSetOutputProps>(
    AwsWafRegexMatchSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafRegexMatchSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafRegexMatchSetOutputProps>(
    AwsWafRegexMatchSet,
    idFilter,
    baseNode,
    optional,
  )
