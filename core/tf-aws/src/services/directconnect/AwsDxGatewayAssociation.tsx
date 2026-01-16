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
  dx_gateway_id: resolvableValue(z.string()),
  allowed_prefixes: resolvableValue(z.string().array().optional()),
  associated_gateway_id: resolvableValue(z.string().optional()),
  associated_gateway_owner_account_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  proposal_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  associated_gateway_type: z.string().optional(),
  dx_gateway_association_id: z.string().optional(),
  dx_gateway_owner_account_id: z.string().optional(),
  transit_gateway_attachment_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dx_gateway_association

export function AwsDxGatewayAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_gateway_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDxGatewayAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDxGatewayAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxGatewayAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDxGatewayAssociation,
    idFilter,
    baseNode,
    optional,
  )
