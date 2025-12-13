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
  from_port: resolvableValue(z.number()),
  protocol: resolvableValue(z.string()),
  security_group_id: resolvableValue(z.string()),
  to_port: resolvableValue(z.number()),
  type: resolvableValue(z.string()),
  cidr_blocks: resolvableValue(z.string().array().optional()),
  description: resolvableValue(z.string().optional()),
  ipv6_cidr_blocks: resolvableValue(z.string().array().optional()),
  prefix_list_ids: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  self: resolvableValue(z.boolean().optional()),
  source_security_group_id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  security_group_rule_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/security_group_rule

export function AwsSecurityGroupRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_security_group_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSecurityGroupRule = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsSecurityGroupRule, idFilter, baseNode)

export const useAwsSecurityGroupRules = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsSecurityGroupRule, idFilter, baseNode)
