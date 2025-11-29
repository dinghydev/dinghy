import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/default_security_group

export const InputSchema = z.object({
  name_prefix: resolvableValue(z.string()),
  egress: resolvableValue(
    z.object({
      cidr_blocks: z.string().array(),
      description: z.string(),
      from_port: z.number(),
      ipv6_cidr_blocks: z.string().array(),
      prefix_list_ids: z.string().array(),
      protocol: z.string(),
      security_groups: z.string().array(),
      self: z.boolean(),
      to_port: z.number(),
    }).array().optional(),
  ),
  ingress: resolvableValue(
    z.object({
      cidr_blocks: z.string().array(),
      description: z.string(),
      from_port: z.number(),
      ipv6_cidr_blocks: z.string().array(),
      prefix_list_ids: z.string().array(),
      protocol: z.string(),
      security_groups: z.string().array(),
      self: z.boolean(),
      to_port: z.number(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  revoke_rules_on_delete: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDefaultSecurityGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_default_security_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDefaultSecurityGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDefaultSecurityGroup, node, id)

export const useAwsDefaultSecurityGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDefaultSecurityGroup, node, id)
