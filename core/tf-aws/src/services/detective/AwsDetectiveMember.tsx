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

export const AwsDetectiveMemberInputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string()),
  email_address: resolvableValue(z.string()),
  graph_arn: resolvableValue(z.string()),
  disable_email_notification: resolvableValue(z.boolean().optional()),
  message: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsDetectiveMemberOutputSchema = z.object({
  administrator_id: z.string().optional(),
  disabled_reason: z.string().optional(),
  id: z.string().optional(),
  invited_time: z.string().optional(),
  status: z.string().optional(),
  updated_time: z.string().optional(),
  volume_usage_in_bytes: z.string().optional(),
})

export type AwsDetectiveMemberInputProps =
  & z.input<typeof AwsDetectiveMemberInputSchema>
  & NodeProps

export type AwsDetectiveMemberOutputProps =
  & z.output<typeof AwsDetectiveMemberOutputSchema>
  & z.output<typeof AwsDetectiveMemberInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/detective_member

export function AwsDetectiveMember(
  props: Partial<AwsDetectiveMemberInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_detective_member'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDetectiveMemberInputSchema}
      _outputSchema={AwsDetectiveMemberOutputSchema}
      {...props}
    />
  )
}

export const useAwsDetectiveMember = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDetectiveMemberOutputProps>(
    AwsDetectiveMember,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDetectiveMembers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDetectiveMemberOutputProps>(
    AwsDetectiveMember,
    idFilter,
    baseNode,
    optional,
  )
