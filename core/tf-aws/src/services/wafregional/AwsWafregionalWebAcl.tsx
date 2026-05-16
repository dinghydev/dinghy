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

export const AwsWafregionalWebAclInputSchema = TfMetaSchema.extend({
  default_action: resolvableValue(z.object({
    type: z.string(),
  })),
  metric_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  logging_configuration: resolvableValue(
    z.object({
      log_destination: z.string(),
      redacted_fields: z.object({
        field_to_match: z.object({
          data: z.string().optional(),
          type: z.string(),
        }).array(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      priority: z.number(),
      rule_id: z.string(),
      type: z.string().optional(),
      action: z.object({
        type: z.string(),
      }).optional(),
      override_action: z.object({
        type: z.string(),
      }).optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWafregionalWebAclOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWafregionalWebAclInputProps =
  & z.input<typeof AwsWafregionalWebAclInputSchema>
  & NodeProps

export type AwsWafregionalWebAclOutputProps =
  & z.output<typeof AwsWafregionalWebAclOutputSchema>
  & z.output<typeof AwsWafregionalWebAclInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafregional_web_acl

export function AwsWafregionalWebAcl(
  props: Partial<AwsWafregionalWebAclInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_web_acl'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafregionalWebAclInputSchema}
      _outputSchema={AwsWafregionalWebAclOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalWebAcl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafregionalWebAclOutputProps>(
    AwsWafregionalWebAcl,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafregionalWebAcls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafregionalWebAclOutputProps>(
    AwsWafregionalWebAcl,
    idFilter,
    baseNode,
    optional,
  )
