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
  resource_type: resolvableValue(z.string()),
  retention_period: resolvableValue(z.object({
    retention_period_unit: z.string(),
    retention_period_value: z.number(),
  })),
  description: resolvableValue(z.string().optional()),
  exclude_resource_tags: resolvableValue(
    z.object({
      resource_tag_key: z.string(),
      resource_tag_value: z.string().optional(),
    }).array().optional(),
  ),
  lock_configuration: resolvableValue(
    z.object({
      unlock_delay: z.object({
        unlock_delay_unit: z.string(),
        unlock_delay_value: z.number(),
      }),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  resource_tags: resolvableValue(
    z.object({
      resource_tag_key: z.string(),
      resource_tag_value: z.string().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  lock_end_time: z.string().optional(),
  lock_state: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/rbin_rule

export function AwsRbinRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rbin_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRbinRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsRbinRule, idFilter, baseNode, optional)

export const useAwsRbinRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsRbinRule, idFilter, baseNode, optional)
