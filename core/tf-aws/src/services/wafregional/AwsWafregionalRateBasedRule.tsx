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
  metric_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  rate_key: resolvableValue(z.string()),
  rate_limit: resolvableValue(z.number()),
  predicate: resolvableValue(
    z.object({
      data_id: z.string(),
      negated: z.boolean(),
      type: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/wafregional_rate_based_rule

export function AwsWafregionalRateBasedRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_rate_based_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalRateBasedRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsWafregionalRateBasedRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafregionalRateBasedRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsWafregionalRateBasedRule,
    idFilter,
    baseNode,
    optional,
  )
