import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_endpoint_security_group_association

export const InputSchema = z.object({
  security_group_id: resolvableValue(z.string()),
  vpc_endpoint_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  replace_default_association: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcEndpointSecurityGroupAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_security_group_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointSecurityGroupAssociation = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsVpcEndpointSecurityGroupAssociation, node, id)

export const useAwsVpcEndpointSecurityGroupAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsVpcEndpointSecurityGroupAssociation, node, id)
