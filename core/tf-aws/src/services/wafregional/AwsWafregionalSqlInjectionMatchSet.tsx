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

export const AwsWafregionalSqlInjectionMatchSetInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    sql_injection_match_tuple: resolvableValue(
      z.object({
        text_transformation: z.string(),
        field_to_match: z.object({
          data: z.string().optional(),
          type: z.string(),
        }),
      }).array().optional(),
    ),
  })

export const AwsWafregionalSqlInjectionMatchSetOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsWafregionalSqlInjectionMatchSetInputProps =
  & z.input<typeof AwsWafregionalSqlInjectionMatchSetInputSchema>
  & NodeProps

export type AwsWafregionalSqlInjectionMatchSetOutputProps =
  & z.output<typeof AwsWafregionalSqlInjectionMatchSetOutputSchema>
  & z.output<typeof AwsWafregionalSqlInjectionMatchSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafregional_sql_injection_match_set

export function AwsWafregionalSqlInjectionMatchSet(
  props: Partial<AwsWafregionalSqlInjectionMatchSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_sql_injection_match_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafregionalSqlInjectionMatchSetInputSchema}
      _outputSchema={AwsWafregionalSqlInjectionMatchSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalSqlInjectionMatchSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafregionalSqlInjectionMatchSetOutputProps>(
    AwsWafregionalSqlInjectionMatchSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafregionalSqlInjectionMatchSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafregionalSqlInjectionMatchSetOutputProps>(
    AwsWafregionalSqlInjectionMatchSet,
    idFilter,
    baseNode,
    optional,
  )
