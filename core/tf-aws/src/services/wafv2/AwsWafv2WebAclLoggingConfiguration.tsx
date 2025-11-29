import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/wafv2_web_acl_logging_configuration

export const InputSchema = z.object({
  log_destination_configs: resolvableValue(z.string().array()),
  resource_arn: resolvableValue(z.string()),
  logging_filter: resolvableValue(
    z.object({
      default_behavior: z.string(),
    }).optional(),
  ),
  redacted_fields: resolvableValue(
    z.object({
      method: z.object({}),
      query_string: z.object({}),
      single_header: z.object({
        name: z.string(),
      }).optional(),
      uri_path: z.object({}),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

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
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsWafv2WebAclLoggingConfiguration, node, id)

export const useAwsWafv2WebAclLoggingConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsWafv2WebAclLoggingConfiguration, node, id)
