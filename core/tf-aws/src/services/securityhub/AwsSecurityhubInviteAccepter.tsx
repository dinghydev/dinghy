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

export const AwsSecurityhubInviteAccepterInputSchema = TfMetaSchema.extend({
  master_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSecurityhubInviteAccepterOutputSchema = z.object({
  invitation_id: z.string().optional(),
})

export type AwsSecurityhubInviteAccepterInputProps =
  & z.input<typeof AwsSecurityhubInviteAccepterInputSchema>
  & NodeProps

export type AwsSecurityhubInviteAccepterOutputProps =
  & z.output<typeof AwsSecurityhubInviteAccepterOutputSchema>
  & z.output<typeof AwsSecurityhubInviteAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_invite_accepter

export function AwsSecurityhubInviteAccepter(
  props: Partial<AwsSecurityhubInviteAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_invite_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubInviteAccepterInputSchema}
      _outputSchema={AwsSecurityhubInviteAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubInviteAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubInviteAccepterOutputProps>(
    AwsSecurityhubInviteAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubInviteAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubInviteAccepterOutputProps>(
    AwsSecurityhubInviteAccepter,
    idFilter,
    baseNode,
    optional,
  )
