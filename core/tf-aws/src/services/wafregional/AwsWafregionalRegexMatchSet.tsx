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

export const AwsWafregionalRegexMatchSetInputSchema = TfMetaSchema.extend({
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
  region: resolvableValue(z.string().optional()),
})

export const AwsWafregionalRegexMatchSetOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsWafregionalRegexMatchSetInputProps =
  & z.input<typeof AwsWafregionalRegexMatchSetInputSchema>
  & NodeProps

export type AwsWafregionalRegexMatchSetOutputProps =
  & z.output<typeof AwsWafregionalRegexMatchSetOutputSchema>
  & z.output<typeof AwsWafregionalRegexMatchSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafregional_regex_match_set

export function AwsWafregionalRegexMatchSet(
  props: Partial<AwsWafregionalRegexMatchSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_regex_match_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafregionalRegexMatchSetInputSchema}
      _outputSchema={AwsWafregionalRegexMatchSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalRegexMatchSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafregionalRegexMatchSetOutputProps>(
    AwsWafregionalRegexMatchSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafregionalRegexMatchSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafregionalRegexMatchSetOutputProps>(
    AwsWafregionalRegexMatchSet,
    idFilter,
    baseNode,
    optional,
  )
