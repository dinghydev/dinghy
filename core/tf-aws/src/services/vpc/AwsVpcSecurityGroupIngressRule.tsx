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
  id: resolvableValue(z.string()),
  ip_protocol: resolvableValue(z.string()),
  security_group_id: resolvableValue(z.string()),
  cidr_ipv4: resolvableValue(z.string().optional()),
  cidr_ipv6: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  from_port: resolvableValue(z.number().optional()),
  prefix_list_id: resolvableValue(z.string().optional()),
  referenced_security_group_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  to_port: resolvableValue(z.number().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  security_group_rule_id: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_security_group_ingress_rule

export function AwsVpcSecurityGroupIngressRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_security_group_ingress_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsVpcSecurityGroupIngressRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsVpcSecurityGroupIngressRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcSecurityGroupIngressRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsVpcSecurityGroupIngressRule,
    idFilter,
    baseNode,
    optional,
  )
