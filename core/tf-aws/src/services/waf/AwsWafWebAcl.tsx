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
  rules: resolvableValue(
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/waf_web_acl

export function AwsWafWebAcl(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_web_acl'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafWebAcl = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsWafWebAcl, idFilter, baseNode)

export const useAwsWafWebAcls = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsWafWebAcl, idFilter, baseNode)
