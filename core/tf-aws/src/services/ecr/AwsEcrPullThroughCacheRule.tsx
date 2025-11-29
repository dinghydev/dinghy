import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ecr_pull_through_cache_rule

export const InputSchema = z.object({
  ecr_repository_prefix: resolvableValue(z.string()),
  upstream_registry_url: resolvableValue(z.string()),
  credential_arn: resolvableValue(z.string().optional()),
  custom_role_arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  upstream_repository_prefix: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  registry_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEcrPullThroughCacheRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_pull_through_cache_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEcrPullThroughCacheRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEcrPullThroughCacheRule, node, id)

export const useAwsEcrPullThroughCacheRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEcrPullThroughCacheRule, node, id)
