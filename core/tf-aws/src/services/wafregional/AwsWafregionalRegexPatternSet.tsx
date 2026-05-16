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

export const AwsWafregionalRegexPatternSetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  regex_pattern_strings: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsWafregionalRegexPatternSetOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsWafregionalRegexPatternSetInputProps =
  & z.input<typeof AwsWafregionalRegexPatternSetInputSchema>
  & NodeProps

export type AwsWafregionalRegexPatternSetOutputProps =
  & z.output<typeof AwsWafregionalRegexPatternSetOutputSchema>
  & z.output<typeof AwsWafregionalRegexPatternSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafregional_regex_pattern_set

export function AwsWafregionalRegexPatternSet(
  props: Partial<AwsWafregionalRegexPatternSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_regex_pattern_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafregionalRegexPatternSetInputSchema}
      _outputSchema={AwsWafregionalRegexPatternSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalRegexPatternSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafregionalRegexPatternSetOutputProps>(
    AwsWafregionalRegexPatternSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafregionalRegexPatternSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafregionalRegexPatternSetOutputProps>(
    AwsWafregionalRegexPatternSet,
    idFilter,
    baseNode,
    optional,
  )
