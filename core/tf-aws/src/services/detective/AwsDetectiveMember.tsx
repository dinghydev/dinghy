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

export const InputSchema = z.object({
  account_id: resolvableValue(z.string()),
  disabled_reason: resolvableValue(z.string()),
  email_address: resolvableValue(z.string()),
  graph_arn: resolvableValue(z.string()),
  disable_email_notification: resolvableValue(z.boolean().optional()),
  message: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/detective_member

export function AwsDetectiveMember(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsDetectiveMember = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsDetectiveMember, idFilter, baseNode, optional)

export const useAwsDetectiveMembers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsDetectiveMember, idFilter, baseNode, optional)
