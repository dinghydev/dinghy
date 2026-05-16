import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafv2RegexPatternSet } from './AwsWafv2RegexPatternSet.tsx'

export const DataAwsWafv2RegexPatternSetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  scope: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsWafv2RegexPatternSetOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  regular_expression: z.set(z.object({
    regex_string: z.string(),
  })).optional(),
})

export type DataAwsWafv2RegexPatternSetInputProps =
  & z.input<typeof DataAwsWafv2RegexPatternSetInputSchema>
  & NodeProps

export type DataAwsWafv2RegexPatternSetOutputProps =
  & z.output<typeof DataAwsWafv2RegexPatternSetOutputSchema>
  & z.output<typeof DataAwsWafv2RegexPatternSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_regex_pattern_set

export function DataAwsWafv2RegexPatternSet(
  props: Partial<DataAwsWafv2RegexPatternSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWafv2RegexPatternSet
      _type='aws_wafv2_regex_pattern_set'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafv2RegexPatternSetInputSchema}
      _outputSchema={DataAwsWafv2RegexPatternSetOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafv2RegexPatternSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafv2RegexPatternSetOutputProps>(
    DataAwsWafv2RegexPatternSet,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafv2RegexPatternSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafv2RegexPatternSetOutputProps>(
    DataAwsWafv2RegexPatternSet,
    idFilter,
    baseNode,
    optional,
  )
