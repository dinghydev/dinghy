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

export const AwsWafv2WebAclLoggingConfigurationInputSchema = TfMetaSchema
  .extend({
    log_destination_configs: resolvableValue(z.string().array()),
    resource_arn: resolvableValue(z.string()),
    logging_filter: resolvableValue(
      z.object({
        default_behavior: z.string(),
        filter: z.object({
          behavior: z.string(),
          requirement: z.string(),
          condition: z.object({
            action_condition: z.object({
              action: z.string(),
            }).optional(),
            label_name_condition: z.object({
              label_name: z.string(),
            }).optional(),
          }).array(),
        }).array(),
      }).optional(),
    ),
    redacted_fields: resolvableValue(
      z.object({
        method: z.object({}).optional(),
        query_string: z.object({}).optional(),
        single_header: z.object({
          name: z.string(),
        }).optional(),
        uri_path: z.object({}).optional(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
  })

export const AwsWafv2WebAclLoggingConfigurationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsWafv2WebAclLoggingConfigurationInputProps =
  & z.input<typeof AwsWafv2WebAclLoggingConfigurationInputSchema>
  & NodeProps

export type AwsWafv2WebAclLoggingConfigurationOutputProps =
  & z.output<typeof AwsWafv2WebAclLoggingConfigurationOutputSchema>
  & z.output<typeof AwsWafv2WebAclLoggingConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafv2_web_acl_logging_configuration

export function AwsWafv2WebAclLoggingConfiguration(
  props: Partial<AwsWafv2WebAclLoggingConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_web_acl_logging_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafv2WebAclLoggingConfigurationInputSchema}
      _outputSchema={AwsWafv2WebAclLoggingConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafv2WebAclLoggingConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafv2WebAclLoggingConfigurationOutputProps>(
    AwsWafv2WebAclLoggingConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafv2WebAclLoggingConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafv2WebAclLoggingConfigurationOutputProps>(
    AwsWafv2WebAclLoggingConfiguration,
    idFilter,
    baseNode,
    optional,
  )
