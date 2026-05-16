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

export const AwsConfigConfigRuleInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  source: resolvableValue(z.object({
    owner: z.string(),
    source_identifier: z.string().optional(),
    custom_policy_details: z.object({
      enable_debug_log_delivery: z.boolean().optional(),
      policy_runtime: z.string(),
      policy_text: z.string(),
    }).optional(),
    source_detail: z.object({
      event_source: z.string().optional(),
      maximum_execution_frequency: z.string().optional(),
      message_type: z.string().optional(),
    }).array().optional(),
  })),
  description: resolvableValue(z.string().optional()),
  evaluation_mode: resolvableValue(
    z.object({
      mode: z.string().optional(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  input_parameters: resolvableValue(z.string().optional()),
  maximum_execution_frequency: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scope: resolvableValue(
    z.object({
      compliance_resource_id: z.string().optional(),
      compliance_resource_types: z.string().array().optional(),
      tag_key: z.string().optional(),
      tag_value: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsConfigConfigRuleOutputSchema = z.object({
  arn: z.string().optional(),
  rule_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsConfigConfigRuleImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsConfigConfigRuleInputProps =
  & z.input<typeof AwsConfigConfigRuleInputSchema>
  & z.input<typeof AwsConfigConfigRuleImportSchema>
  & NodeProps

export type AwsConfigConfigRuleOutputProps =
  & z.output<typeof AwsConfigConfigRuleOutputSchema>
  & z.output<typeof AwsConfigConfigRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/config_config_rule

export function AwsConfigConfigRule(
  props: Partial<AwsConfigConfigRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_config_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConfigConfigRuleInputSchema}
      _outputSchema={AwsConfigConfigRuleOutputSchema}
      _importSchema={AwsConfigConfigRuleImportSchema}
      {...props}
    />
  )
}

export const useAwsConfigConfigRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConfigConfigRuleOutputProps>(
    AwsConfigConfigRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConfigConfigRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConfigConfigRuleOutputProps>(
    AwsConfigConfigRule,
    idFilter,
    baseNode,
    optional,
  )
