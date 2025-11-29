import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/detective_member

export const InputSchema = z.object({
  account_id: resolvableValue(z.string()),
  disabled_reason: resolvableValue(z.string()),
  email_address: resolvableValue(z.string()),
  graph_arn: resolvableValue(z.string()),
  disable_email_notification: resolvableValue(z.boolean().optional()),
  message: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  administrator_id: z.string().optional(),
  id: z.string().optional(),
  invited_time: z.string().optional(),
  status: z.string().optional(),
  updated_time: z.string().optional(),
  volume_usage_in_bytes: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDetectiveMember(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_detective_member'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDetectiveMember = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDetectiveMember, node, id)

export const useAwsDetectiveMembers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDetectiveMember, node, id)
