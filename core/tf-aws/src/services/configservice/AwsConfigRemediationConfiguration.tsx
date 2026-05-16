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

export const AwsConfigRemediationConfigurationInputSchema = TfMetaSchema.extend(
  {
    config_rule_name: resolvableValue(z.string()),
    target_id: resolvableValue(z.string()),
    target_type: resolvableValue(z.string()),
    automatic: resolvableValue(z.boolean().optional()),
    execution_controls: resolvableValue(
      z.object({
        ssm_controls: z.object({
          concurrent_execution_rate_percentage: z.number().optional(),
          error_percentage: z.number().optional(),
        }).optional(),
      }).optional(),
    ),
    id: resolvableValue(z.string().optional()),
    maximum_automatic_attempts: resolvableValue(z.number().optional()),
    parameter: resolvableValue(
      z.object({
        name: z.string(),
        resource_value: z.string().optional(),
        static_value: z.string().optional(),
        static_values: z.string().array().optional(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    resource_type: resolvableValue(z.string().optional()),
    retry_attempt_seconds: resolvableValue(z.number().optional()),
    target_version: resolvableValue(z.string().optional()),
  },
)

export const AwsConfigRemediationConfigurationOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsConfigRemediationConfigurationImportSchema = z.object({
  config_rule_name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsConfigRemediationConfigurationInputProps =
  & z.input<typeof AwsConfigRemediationConfigurationInputSchema>
  & z.input<typeof AwsConfigRemediationConfigurationImportSchema>
  & NodeProps

export type AwsConfigRemediationConfigurationOutputProps =
  & z.output<typeof AwsConfigRemediationConfigurationOutputSchema>
  & z.output<typeof AwsConfigRemediationConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/config_remediation_configuration

export function AwsConfigRemediationConfiguration(
  props: Partial<AwsConfigRemediationConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_remediation_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConfigRemediationConfigurationInputSchema}
      _outputSchema={AwsConfigRemediationConfigurationOutputSchema}
      _importSchema={AwsConfigRemediationConfigurationImportSchema}
      {...props}
    />
  )
}

export const useAwsConfigRemediationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConfigRemediationConfigurationOutputProps>(
    AwsConfigRemediationConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConfigRemediationConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConfigRemediationConfigurationOutputProps>(
    AwsConfigRemediationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
