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

export const AwsMacie2MemberInputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string()),
  email: resolvableValue(z.string()),
  invitation_disable_email_notification: resolvableValue(
    z.boolean().optional(),
  ),
  invitation_message: resolvableValue(z.string().optional()),
  invite: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsMacie2MemberOutputSchema = z.object({
  administrator_account_id: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  invited_at: z.string().optional(),
  master_account_id: z.string().optional(),
  relationship_status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
})

export type AwsMacie2MemberInputProps =
  & z.input<typeof AwsMacie2MemberInputSchema>
  & NodeProps

export type AwsMacie2MemberOutputProps =
  & z.output<typeof AwsMacie2MemberOutputSchema>
  & z.output<typeof AwsMacie2MemberInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/macie2_member

export function AwsMacie2Member(props: Partial<AwsMacie2MemberInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_macie2_member'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMacie2MemberInputSchema}
      _outputSchema={AwsMacie2MemberOutputSchema}
      {...props}
    />
  )
}

export const useAwsMacie2Member = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMacie2MemberOutputProps>(
    AwsMacie2Member,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMacie2Members = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMacie2MemberOutputProps>(
    AwsMacie2Member,
    idFilter,
    baseNode,
    optional,
  )
