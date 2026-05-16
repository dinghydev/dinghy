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

export const AwsWafv2RegexPatternSetInputSchema = TfMetaSchema.extend({
  scope: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  regular_expression: resolvableValue(
    z.object({
      regex_string: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWafv2RegexPatternSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  lock_token: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWafv2RegexPatternSetInputProps =
  & z.input<typeof AwsWafv2RegexPatternSetInputSchema>
  & NodeProps

export type AwsWafv2RegexPatternSetOutputProps =
  & z.output<typeof AwsWafv2RegexPatternSetOutputSchema>
  & z.output<typeof AwsWafv2RegexPatternSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafv2_regex_pattern_set

export function AwsWafv2RegexPatternSet(
  props: Partial<AwsWafv2RegexPatternSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_regex_pattern_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafv2RegexPatternSetInputSchema}
      _outputSchema={AwsWafv2RegexPatternSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafv2RegexPatternSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafv2RegexPatternSetOutputProps>(
    AwsWafv2RegexPatternSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafv2RegexPatternSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafv2RegexPatternSetOutputProps>(
    AwsWafv2RegexPatternSet,
    idFilter,
    baseNode,
    optional,
  )
