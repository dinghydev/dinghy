import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iam_service_linked_role

export const InputSchema = z.object({
  aws_service_name: resolvableValue(z.string()),
  custom_suffix: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  create_date: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  path: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  unique_id: z.string().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIamServiceLinkedRole(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_service_linked_role'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsIamServiceLinkedRole = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIamServiceLinkedRole, node, id)

export const useAwsIamServiceLinkedRoles = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIamServiceLinkedRole, node, id)
