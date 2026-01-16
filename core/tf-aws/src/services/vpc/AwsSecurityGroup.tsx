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

export const InputSchema = TfMetaSchema.extend({
  description: resolvableValue(z.string().optional()),
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
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  revoke_rules_on_delete: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  vpc_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/security_group

export function AwsSecurityGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_security_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsSecurityGroup, idFilter, baseNode, optional)

export const useAwsSecurityGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsSecurityGroup, idFilter, baseNode, optional)
