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

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  policy_runtime: resolvableValue(z.string()),
  policy_text: resolvableValue(z.string()),
  trigger_types: resolvableValue(z.string().array()),
  debug_log_delivery_accounts: resolvableValue(z.string().array().optional()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/config_organization_custom_policy_rule

export function AwsConfigOrganizationCustomPolicyRule(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_organization_custom_policy_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConfigOrganizationCustomPolicyRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsConfigOrganizationCustomPolicyRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConfigOrganizationCustomPolicyRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsConfigOrganizationCustomPolicyRule,
    idFilter,
    baseNode,
    optional,
  )
