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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/wafv2_web_acl_logging_configuration

export function AwsWafv2WebAclLoggingConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_web_acl_logging_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafv2WebAclLoggingConfiguration = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsWafv2WebAclLoggingConfiguration,
    idFilter,
    baseNode,
  )

export const useAwsWafv2WebAclLoggingConfigurations = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsWafv2WebAclLoggingConfiguration,
    idFilter,
    baseNode,
  )
