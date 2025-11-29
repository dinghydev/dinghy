import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53_vpc_association_authorization

export const InputSchema = z.object({
  vpc_id: resolvableValue(z.string()),
  zone_id: resolvableValue(z.string()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
    }).optional(),
  ),
  vpc_region: resolvableValue(z.string().optional()),
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

export function AwsRoute53VpcAssociationAuthorization(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_vpc_association_authorization'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53VpcAssociationAuthorization = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsRoute53VpcAssociationAuthorization, node, id)

export const useAwsRoute53VpcAssociationAuthorizations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsRoute53VpcAssociationAuthorization, node, id)
