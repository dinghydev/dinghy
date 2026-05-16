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

export const AwsConfigOrganizationCustomRuleInputSchema = TfMetaSchema.extend({
  lambda_function_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  trigger_types: resolvableValue(z.string().array()),
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

export const AwsConfigOrganizationCustomRuleOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsConfigOrganizationCustomRuleImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsConfigOrganizationCustomRuleInputProps =
  & z.input<typeof AwsConfigOrganizationCustomRuleInputSchema>
  & z.input<typeof AwsConfigOrganizationCustomRuleImportSchema>
  & NodeProps

export type AwsConfigOrganizationCustomRuleOutputProps =
  & z.output<typeof AwsConfigOrganizationCustomRuleOutputSchema>
  & z.output<typeof AwsConfigOrganizationCustomRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/config_organization_custom_rule

export function AwsConfigOrganizationCustomRule(
  props: Partial<AwsConfigOrganizationCustomRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_organization_custom_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConfigOrganizationCustomRuleInputSchema}
      _outputSchema={AwsConfigOrganizationCustomRuleOutputSchema}
      _importSchema={AwsConfigOrganizationCustomRuleImportSchema}
      {...props}
    />
  )
}

export const useAwsConfigOrganizationCustomRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConfigOrganizationCustomRuleOutputProps>(
    AwsConfigOrganizationCustomRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConfigOrganizationCustomRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConfigOrganizationCustomRuleOutputProps>(
    AwsConfigOrganizationCustomRule,
    idFilter,
    baseNode,
    optional,
  )
