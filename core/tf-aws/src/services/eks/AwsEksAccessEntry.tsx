import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/eks_access_entry

export const InputSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  principal_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  kubernetes_groups: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
  user_name: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  access_entry_arn: z.string().optional(),
  created_at: z.string().optional(),
  modified_at: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEksAccessEntry(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_access_entry'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEksAccessEntry = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEksAccessEntry, node, id)

export const useAwsEksAccessEntrys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEksAccessEntry, node, id)
