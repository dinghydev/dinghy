import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sesv2_contact_list

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  contact_list_name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  topic: resolvableValue(
    z.object({
      default_subscription_status: z.string(),
      description: z.string().optional(),
      display_name: z.string(),
      topic_name: z.string(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  created_timestamp: z.string().optional(),
  id: z.string().optional(),
  last_updated_timestamp: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSesv2ContactList(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_contact_list'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2ContactList = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSesv2ContactList, node, id)

export const useAwsSesv2ContactLists = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSesv2ContactList, node, id)
