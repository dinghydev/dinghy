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

export const AwsDxGatewayAssociationProposalInputSchema = TfMetaSchema.extend({
  associated_gateway_id: resolvableValue(z.string()),
  dx_gateway_id: resolvableValue(z.string()),
  dx_gateway_owner_account_id: resolvableValue(z.string()),
  allowed_prefixes: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsDxGatewayAssociationProposalOutputSchema = z.object({
  associated_gateway_owner_account_id: z.string().optional(),
  associated_gateway_type: z.string().optional(),
  id: z.string().optional(),
})

export type AwsDxGatewayAssociationProposalInputProps =
  & z.input<typeof AwsDxGatewayAssociationProposalInputSchema>
  & NodeProps

export type AwsDxGatewayAssociationProposalOutputProps =
  & z.output<typeof AwsDxGatewayAssociationProposalOutputSchema>
  & z.output<typeof AwsDxGatewayAssociationProposalInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_gateway_association_proposal

export function AwsDxGatewayAssociationProposal(
  props: Partial<AwsDxGatewayAssociationProposalInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_gateway_association_proposal'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxGatewayAssociationProposalInputSchema}
      _outputSchema={AwsDxGatewayAssociationProposalOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxGatewayAssociationProposal = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxGatewayAssociationProposalOutputProps>(
    AwsDxGatewayAssociationProposal,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxGatewayAssociationProposals = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxGatewayAssociationProposalOutputProps>(
    AwsDxGatewayAssociationProposal,
    idFilter,
    baseNode,
    optional,
  )
