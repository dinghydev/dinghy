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

export const AwsGuarddutyMemberInputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string()),
  detector_id: resolvableValue(z.string()),
  email: resolvableValue(z.string()),
  disable_email_notification: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  invitation_message: resolvableValue(z.string().optional()),
  invite: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsGuarddutyMemberOutputSchema = z.object({
  relationship_status: z.string().optional(),
})

export type AwsGuarddutyMemberInputProps =
  & z.input<typeof AwsGuarddutyMemberInputSchema>
  & NodeProps

export type AwsGuarddutyMemberOutputProps =
  & z.output<typeof AwsGuarddutyMemberOutputSchema>
  & z.output<typeof AwsGuarddutyMemberInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/guardduty_member

export function AwsGuarddutyMember(
  props: Partial<AwsGuarddutyMemberInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_member'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGuarddutyMemberInputSchema}
      _outputSchema={AwsGuarddutyMemberOutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyMember = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGuarddutyMemberOutputProps>(
    AwsGuarddutyMember,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGuarddutyMembers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGuarddutyMemberOutputProps>(
    AwsGuarddutyMember,
    idFilter,
    baseNode,
    optional,
  )
