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

export const InputSchema = TfMetaSchema.extend({
  credential_arn: resolvableValue(z.string()),
  custom_role_arn: resolvableValue(z.string()),
  ecr_repository_prefix: resolvableValue(z.string()),
  registry_id: resolvableValue(z.string()),
  upstream_registry_url: resolvableValue(z.string()),
  upstream_repository_prefix: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/ecr_pull_through_cache_rule

export function DataAwsEcrPullThroughCacheRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEcrPullThroughCacheRule
      _type='aws_ecr_pull_through_cache_rule'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEcrPullThroughCacheRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsEcrPullThroughCacheRule,
    idFilter,
    baseNode,
    optional,
  )
