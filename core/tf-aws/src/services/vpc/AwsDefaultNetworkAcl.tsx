import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/default_network_acl

export const InputSchema = z.object({
  default_network_acl_id: resolvableValue(z.string()),
  egress: resolvableValue(
    z.object({
      action: z.string(),
      cidr_block: z.string().optional(),
      from_port: z.number(),
      icmp_code: z.number().optional(),
      icmp_type: z.number().optional(),
      ipv6_cidr_block: z.string().optional(),
      protocol: z.string(),
      rule_no: z.number(),
      to_port: z.number(),
    }).array().optional(),
  ),
  ingress: resolvableValue(
    z.object({
      action: z.string(),
      cidr_block: z.string().optional(),
      from_port: z.number(),
      icmp_code: z.number().optional(),
      icmp_type: z.number().optional(),
      ipv6_cidr_block: z.string().optional(),
      protocol: z.string(),
      rule_no: z.number(),
      to_port: z.number(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  subnet_ids: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDefaultNetworkAcl(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_default_network_acl'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDefaultNetworkAcl = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDefaultNetworkAcl, node, id)

export const useAwsDefaultNetworkAcls = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDefaultNetworkAcl, node, id)
