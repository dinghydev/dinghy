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

export const AwsConfigOrganizationManagedRuleInputSchema = TfMetaSchema.extend({
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

export const AwsConfigOrganizationManagedRuleOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsConfigOrganizationManagedRuleImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsConfigOrganizationManagedRuleInputProps =
  & z.input<typeof AwsConfigOrganizationManagedRuleInputSchema>
  & z.input<typeof AwsConfigOrganizationManagedRuleImportSchema>
  & NodeProps

export type AwsConfigOrganizationManagedRuleOutputProps =
  & z.output<typeof AwsConfigOrganizationManagedRuleOutputSchema>
  & z.output<typeof AwsConfigOrganizationManagedRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/config_organization_managed_rule

export function AwsConfigOrganizationManagedRule(
  props: Partial<AwsConfigOrganizationManagedRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_organization_managed_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConfigOrganizationManagedRuleInputSchema}
      _outputSchema={AwsConfigOrganizationManagedRuleOutputSchema}
      _importSchema={AwsConfigOrganizationManagedRuleImportSchema}
      {...props}
    />
  )
}

export const useAwsConfigOrganizationManagedRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConfigOrganizationManagedRuleOutputProps>(
    AwsConfigOrganizationManagedRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConfigOrganizationManagedRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConfigOrganizationManagedRuleOutputProps>(
    AwsConfigOrganizationManagedRule,
    idFilter,
    baseNode,
    optional,
  )
