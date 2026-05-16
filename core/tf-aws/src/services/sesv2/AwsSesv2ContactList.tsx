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

export const AwsSesv2ContactListInputSchema = TfMetaSchema.extend({
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

export const AwsSesv2ContactListOutputSchema = z.object({
  arn: z.string().optional(),
  created_timestamp: z.string().optional(),
  id: z.string().optional(),
  last_updated_timestamp: z.string().optional(),
})

export type AwsSesv2ContactListInputProps =
  & z.input<typeof AwsSesv2ContactListInputSchema>
  & NodeProps

export type AwsSesv2ContactListOutputProps =
  & z.output<typeof AwsSesv2ContactListOutputSchema>
  & z.output<typeof AwsSesv2ContactListInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sesv2_contact_list

export function AwsSesv2ContactList(
  props: Partial<AwsSesv2ContactListInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_contact_list'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesv2ContactListInputSchema}
      _outputSchema={AwsSesv2ContactListOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2ContactList = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesv2ContactListOutputProps>(
    AwsSesv2ContactList,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesv2ContactLists = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesv2ContactListOutputProps>(
    AwsSesv2ContactList,
    idFilter,
    baseNode,
    optional,
  )
