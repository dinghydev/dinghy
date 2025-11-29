import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appstream_user_stack_association

export const InputSchema = z.object({
  authentication_type: resolvableValue(z.string()),
  stack_name: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  send_email_notification: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppstreamUserStackAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appstream_user_stack_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppstreamUserStackAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppstreamUserStackAssociation, node, id)

export const useAwsAppstreamUserStackAssociations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppstreamUserStackAssociation, node, id)
