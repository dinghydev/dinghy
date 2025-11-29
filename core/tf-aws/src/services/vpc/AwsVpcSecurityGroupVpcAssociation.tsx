import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_security_group_vpc_association

export const InputSchema = z.object({
  security_group_id: resolvableValue(z.string()),
  vpc_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  state: z.string().optional(),
})

export const ImportSchema = z.object({
  security_group_id: resolvableValue(z.string()),
  vpc_id: resolvableValue(z.string()),
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

export function AwsVpcSecurityGroupVpcAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_security_group_vpc_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsVpcSecurityGroupVpcAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVpcSecurityGroupVpcAssociation, node, id)

export const useAwsVpcSecurityGroupVpcAssociations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsVpcSecurityGroupVpcAssociation, node, id)
