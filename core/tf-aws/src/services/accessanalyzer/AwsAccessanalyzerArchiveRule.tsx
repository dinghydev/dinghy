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

export const AwsAccessanalyzerArchiveRuleInputSchema = TfMetaSchema.extend({
  analyzer_name: resolvableValue(z.string()),
  filter: resolvableValue(
    z.object({
      contains: z.string().array().optional(),
      criteria: z.string(),
      eq: z.string().array().optional(),
      exists: z.string().optional(),
      neq: z.string().array().optional(),
    }).array(),
  ),
  rule_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsAccessanalyzerArchiveRuleOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsAccessanalyzerArchiveRuleInputProps =
  & z.input<typeof AwsAccessanalyzerArchiveRuleInputSchema>
  & NodeProps

export type AwsAccessanalyzerArchiveRuleOutputProps =
  & z.output<typeof AwsAccessanalyzerArchiveRuleOutputSchema>
  & z.output<typeof AwsAccessanalyzerArchiveRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/accessanalyzer_archive_rule

export function AwsAccessanalyzerArchiveRule(
  props: Partial<AwsAccessanalyzerArchiveRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_accessanalyzer_archive_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAccessanalyzerArchiveRuleInputSchema}
      _outputSchema={AwsAccessanalyzerArchiveRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsAccessanalyzerArchiveRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAccessanalyzerArchiveRuleOutputProps>(
    AwsAccessanalyzerArchiveRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAccessanalyzerArchiveRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAccessanalyzerArchiveRuleOutputProps>(
    AwsAccessanalyzerArchiveRule,
    idFilter,
    baseNode,
    optional,
  )
