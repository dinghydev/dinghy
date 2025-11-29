import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dx_gateway_association_proposal

export const InputSchema = z.object({
  associated_gateway_id: resolvableValue(z.string()),
  dx_gateway_id: resolvableValue(z.string()),
  dx_gateway_owner_account_id: resolvableValue(z.string()),
  allowed_prefixes: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  associated_gateway_owner_account_id: z.string().optional(),
  associated_gateway_type: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDxGatewayAssociationProposal(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_gateway_association_proposal'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDxGatewayAssociationProposal = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDxGatewayAssociationProposal, node, id)

export const useAwsDxGatewayAssociationProposals = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDxGatewayAssociationProposal, node, id)
