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

export const AwsGuarddutyInviteAccepterInputSchema = TfMetaSchema.extend({
  detector_id: resolvableValue(z.string()),
  master_account_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsGuarddutyInviteAccepterOutputSchema = z.object({})

export type AwsGuarddutyInviteAccepterInputProps =
  & z.input<typeof AwsGuarddutyInviteAccepterInputSchema>
  & NodeProps

export type AwsGuarddutyInviteAccepterOutputProps =
  & z.output<typeof AwsGuarddutyInviteAccepterOutputSchema>
  & z.output<typeof AwsGuarddutyInviteAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/guardduty_invite_accepter

export function AwsGuarddutyInviteAccepter(
  props: Partial<AwsGuarddutyInviteAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_invite_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGuarddutyInviteAccepterInputSchema}
      _outputSchema={AwsGuarddutyInviteAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyInviteAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGuarddutyInviteAccepterOutputProps>(
    AwsGuarddutyInviteAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGuarddutyInviteAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGuarddutyInviteAccepterOutputProps>(
    AwsGuarddutyInviteAccepter,
    idFilter,
    baseNode,
    optional,
  )
