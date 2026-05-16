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

export const AwsEcrPullThroughCacheRuleInputSchema = TfMetaSchema.extend({
  ecr_repository_prefix: resolvableValue(z.string()),
  upstream_registry_url: resolvableValue(z.string()),
  credential_arn: resolvableValue(z.string().optional()),
  custom_role_arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  upstream_repository_prefix: resolvableValue(z.string().optional()),
})

export const AwsEcrPullThroughCacheRuleOutputSchema = z.object({
  registry_id: z.string().optional(),
})

export type AwsEcrPullThroughCacheRuleInputProps =
  & z.input<typeof AwsEcrPullThroughCacheRuleInputSchema>
  & NodeProps

export type AwsEcrPullThroughCacheRuleOutputProps =
  & z.output<typeof AwsEcrPullThroughCacheRuleOutputSchema>
  & z.output<typeof AwsEcrPullThroughCacheRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecr_pull_through_cache_rule

export function AwsEcrPullThroughCacheRule(
  props: Partial<AwsEcrPullThroughCacheRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_pull_through_cache_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcrPullThroughCacheRuleInputSchema}
      _outputSchema={AwsEcrPullThroughCacheRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsEcrPullThroughCacheRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcrPullThroughCacheRuleOutputProps>(
    AwsEcrPullThroughCacheRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcrPullThroughCacheRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcrPullThroughCacheRuleOutputProps>(
    AwsEcrPullThroughCacheRule,
    idFilter,
    baseNode,
    optional,
  )
