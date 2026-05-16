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

export const AwsWafSqlInjectionMatchSetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  sql_injection_match_tuples: resolvableValue(
    z.object({
      text_transformation: z.string(),
      field_to_match: z.object({
        data: z.string().optional(),
        type: z.string(),
      }),
    }).array().optional(),
  ),
})

export const AwsWafSqlInjectionMatchSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsWafSqlInjectionMatchSetInputProps =
  & z.input<typeof AwsWafSqlInjectionMatchSetInputSchema>
  & NodeProps

export type AwsWafSqlInjectionMatchSetOutputProps =
  & z.output<typeof AwsWafSqlInjectionMatchSetOutputSchema>
  & z.output<typeof AwsWafSqlInjectionMatchSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/waf_sql_injection_match_set

export function AwsWafSqlInjectionMatchSet(
  props: Partial<AwsWafSqlInjectionMatchSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_sql_injection_match_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafSqlInjectionMatchSetInputSchema}
      _outputSchema={AwsWafSqlInjectionMatchSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafSqlInjectionMatchSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafSqlInjectionMatchSetOutputProps>(
    AwsWafSqlInjectionMatchSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafSqlInjectionMatchSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafSqlInjectionMatchSetOutputProps>(
    AwsWafSqlInjectionMatchSet,
    idFilter,
    baseNode,
    optional,
  )
