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

export const AwsWafRegexPatternSetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  regex_pattern_strings: resolvableValue(z.string().array().optional()),
})

export const AwsWafRegexPatternSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsWafRegexPatternSetInputProps =
  & z.input<typeof AwsWafRegexPatternSetInputSchema>
  & NodeProps

export type AwsWafRegexPatternSetOutputProps =
  & z.output<typeof AwsWafRegexPatternSetOutputSchema>
  & z.output<typeof AwsWafRegexPatternSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/waf_regex_pattern_set

export function AwsWafRegexPatternSet(
  props: Partial<AwsWafRegexPatternSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_regex_pattern_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafRegexPatternSetInputSchema}
      _outputSchema={AwsWafRegexPatternSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafRegexPatternSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafRegexPatternSetOutputProps>(
    AwsWafRegexPatternSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafRegexPatternSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafRegexPatternSetOutputProps>(
    AwsWafRegexPatternSet,
    idFilter,
    baseNode,
    optional,
  )
