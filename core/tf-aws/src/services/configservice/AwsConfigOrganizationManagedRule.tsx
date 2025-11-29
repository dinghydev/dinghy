import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/config_organization_managed_rule

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  rule_identifier: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  excluded_accounts: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  input_parameters: resolvableValue(z.string().optional()),
  maximum_execution_frequency: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resource_id_scope: resolvableValue(z.string().optional()),
  resource_types_scope: resolvableValue(z.string().array().optional()),
  tag_key_scope: resolvableValue(z.string().optional()),
  tag_value_scope: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsConfigOrganizationManagedRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_organization_managed_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConfigOrganizationManagedRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsConfigOrganizationManagedRule, node, id)

export const useAwsConfigOrganizationManagedRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsConfigOrganizationManagedRule, node, id)
