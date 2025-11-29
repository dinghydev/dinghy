import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/customerprofiles_domain

export const InputSchema = z.object({
  default_expiration_days: resolvableValue(z.number()),
  domain_name: resolvableValue(z.string()),
  dead_letter_queue_url: resolvableValue(z.string().optional()),
  default_encryption_key: resolvableValue(z.string().optional()),
  matching: resolvableValue(
    z.object({
      enabled: z.boolean(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  rule_based_matching: resolvableValue(
    z.object({
      enabled: z.boolean(),
      max_allowed_rule_level_for_matching: z.number().optional(),
      max_allowed_rule_level_for_merging: z.number().optional(),
      status: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

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

export function AwsCustomerprofilesDomain(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_customerprofiles_domain'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCustomerprofilesDomain = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCustomerprofilesDomain, node, id)

export const useAwsCustomerprofilesDomains = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCustomerprofilesDomain, node, id)
