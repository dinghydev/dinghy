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

export const AwsSecurityhubConfigurationPolicyInputSchema = TfMetaSchema.extend(
  {
    configuration_policy: resolvableValue(z.object({
      enabled_standard_arns: z.string().array().optional(),
      service_enabled: z.boolean(),
      security_controls_configuration: z.object({
        disabled_control_identifiers: z.string().array().optional(),
        enabled_control_identifiers: z.string().array().optional(),
        security_control_custom_parameter: z.object({
          security_control_id: z.string(),
          parameter: z.object({
            name: z.string(),
            value_type: z.string(),
            bool: z.object({
              value: z.boolean(),
            }).optional(),
            double: z.object({
              value: z.number(),
            }).optional(),
            enum: z.object({
              value: z.string(),
            }).optional(),
            enum_list: z.object({
              value: z.string().array(),
            }).optional(),
            int: z.object({
              value: z.number(),
            }).optional(),
            int_list: z.object({
              value: z.number().array(),
            }).optional(),
            string: z.object({
              value: z.string(),
            }).optional(),
            string_list: z.object({
              value: z.string().array(),
            }).optional(),
          }).array(),
        }).array().optional(),
      }).optional(),
    })),
    name: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsSecurityhubConfigurationPolicyOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export const AwsSecurityhubConfigurationPolicyImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSecurityhubConfigurationPolicyInputProps =
  & z.input<typeof AwsSecurityhubConfigurationPolicyInputSchema>
  & z.input<typeof AwsSecurityhubConfigurationPolicyImportSchema>
  & NodeProps

export type AwsSecurityhubConfigurationPolicyOutputProps =
  & z.output<typeof AwsSecurityhubConfigurationPolicyOutputSchema>
  & z.output<typeof AwsSecurityhubConfigurationPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_configuration_policy

export function AwsSecurityhubConfigurationPolicy(
  props: Partial<AwsSecurityhubConfigurationPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_configuration_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubConfigurationPolicyInputSchema}
      _outputSchema={AwsSecurityhubConfigurationPolicyOutputSchema}
      _importSchema={AwsSecurityhubConfigurationPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubConfigurationPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubConfigurationPolicyOutputProps>(
    AwsSecurityhubConfigurationPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubConfigurationPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubConfigurationPolicyOutputProps>(
    AwsSecurityhubConfigurationPolicy,
    idFilter,
    baseNode,
    optional,
  )
