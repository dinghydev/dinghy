import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEcrPullThroughCacheRule } from './AwsEcrPullThroughCacheRule.tsx'

export const DataAwsEcrPullThroughCacheRuleInputSchema = TfMetaSchema.extend({
  ecr_repository_prefix: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEcrPullThroughCacheRuleOutputSchema = z.object({
  credential_arn: z.string().optional(),
  custom_role_arn: z.string().optional(),
  registry_id: z.string().optional(),
  upstream_registry_url: z.string().optional(),
  upstream_repository_prefix: z.string().optional(),
})

export type DataAwsEcrPullThroughCacheRuleInputProps =
  & z.input<typeof DataAwsEcrPullThroughCacheRuleInputSchema>
  & NodeProps

export type DataAwsEcrPullThroughCacheRuleOutputProps =
  & z.output<typeof DataAwsEcrPullThroughCacheRuleOutputSchema>
  & z.output<typeof DataAwsEcrPullThroughCacheRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ecr_pull_through_cache_rule

export function DataAwsEcrPullThroughCacheRule(
  props: Partial<DataAwsEcrPullThroughCacheRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEcrPullThroughCacheRule
      _type='aws_ecr_pull_through_cache_rule'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEcrPullThroughCacheRuleInputSchema}
      _outputSchema={DataAwsEcrPullThroughCacheRuleOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEcrPullThroughCacheRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEcrPullThroughCacheRuleOutputProps>(
    DataAwsEcrPullThroughCacheRule,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEcrPullThroughCacheRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEcrPullThroughCacheRuleOutputProps>(
    DataAwsEcrPullThroughCacheRule,
    idFilter,
    baseNode,
    optional,
  )
