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

export const AwsDetectiveInvitationAccepterInputSchema = TfMetaSchema.extend({
  graph_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsDetectiveInvitationAccepterOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsDetectiveInvitationAccepterInputProps =
  & z.input<typeof AwsDetectiveInvitationAccepterInputSchema>
  & NodeProps

export type AwsDetectiveInvitationAccepterOutputProps =
  & z.output<typeof AwsDetectiveInvitationAccepterOutputSchema>
  & z.output<typeof AwsDetectiveInvitationAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/detective_invitation_accepter

export function AwsDetectiveInvitationAccepter(
  props: Partial<AwsDetectiveInvitationAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_detective_invitation_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDetectiveInvitationAccepterInputSchema}
      _outputSchema={AwsDetectiveInvitationAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsDetectiveInvitationAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDetectiveInvitationAccepterOutputProps>(
    AwsDetectiveInvitationAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDetectiveInvitationAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDetectiveInvitationAccepterOutputProps>(
    AwsDetectiveInvitationAccepter,
    idFilter,
    baseNode,
    optional,
  )
