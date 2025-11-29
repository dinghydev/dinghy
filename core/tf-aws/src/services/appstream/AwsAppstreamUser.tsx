import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appstream_user

export const InputSchema = z.object({
  authentication_type: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  enabled: resolvableValue(z.boolean().optional()),
  first_name: resolvableValue(z.string().optional()),
  last_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  send_email_notification: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppstreamUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appstream_user'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppstreamUser = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppstreamUser, node, id)

export const useAwsAppstreamUsers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppstreamUser, node, id)
