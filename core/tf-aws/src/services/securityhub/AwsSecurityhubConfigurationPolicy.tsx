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
  arn: resolvableValue(z.string()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/securityhub_configuration_policy

export function AwsSecurityhubConfigurationPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_configuration_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubConfigurationPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsSecurityhubConfigurationPolicy,
    idFilter,
    baseNode,
    optional,
  )
