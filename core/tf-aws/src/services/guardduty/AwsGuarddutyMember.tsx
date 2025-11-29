import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/guardduty_member

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  relationship_status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGuarddutyMember(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_member'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyMember = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGuarddutyMember, node, id)

export const useAwsGuarddutyMembers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGuarddutyMember, node, id)
