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

export const AwsMacie2InvitationAccepterInputSchema = TfMetaSchema.extend({
  administrator_account_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsMacie2InvitationAccepterOutputSchema = z.object({
  id: z.string().optional(),
  invitation_id: z.string().optional(),
})

export type AwsMacie2InvitationAccepterInputProps =
  & z.input<typeof AwsMacie2InvitationAccepterInputSchema>
  & NodeProps

export type AwsMacie2InvitationAccepterOutputProps =
  & z.output<typeof AwsMacie2InvitationAccepterOutputSchema>
  & z.output<typeof AwsMacie2InvitationAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/macie2_invitation_accepter

export function AwsMacie2InvitationAccepter(
  props: Partial<AwsMacie2InvitationAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_macie2_invitation_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMacie2InvitationAccepterInputSchema}
      _outputSchema={AwsMacie2InvitationAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsMacie2InvitationAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMacie2InvitationAccepterOutputProps>(
    AwsMacie2InvitationAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMacie2InvitationAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMacie2InvitationAccepterOutputProps>(
    AwsMacie2InvitationAccepter,
    idFilter,
    baseNode,
    optional,
  )
