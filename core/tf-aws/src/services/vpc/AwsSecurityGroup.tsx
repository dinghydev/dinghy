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

export const AwsSecurityGroupInputSchema = TfMetaSchema.extend({
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

export const AwsSecurityGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSecurityGroupImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSecurityGroupInputProps =
  & z.input<typeof AwsSecurityGroupInputSchema>
  & z.input<typeof AwsSecurityGroupImportSchema>
  & NodeProps

export type AwsSecurityGroupOutputProps =
  & z.output<typeof AwsSecurityGroupOutputSchema>
  & z.output<typeof AwsSecurityGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/security_group

export function AwsSecurityGroup(props: Partial<AwsSecurityGroupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_security_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityGroupInputSchema}
      _outputSchema={AwsSecurityGroupOutputSchema}
      _importSchema={AwsSecurityGroupImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityGroupOutputProps>(
    AwsSecurityGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityGroupOutputProps>(
    AwsSecurityGroup,
    idFilter,
    baseNode,
    optional,
  )
