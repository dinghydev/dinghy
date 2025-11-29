import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEksAccessEntry } from './AwsEksAccessEntry.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/eks_access_entry

export const InputSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  principal_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  access_entry_arn: z.string().optional(),
  created_at: z.string().optional(),
  kubernetes_groups: z.string().array().optional(),
  modified_at: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
  user_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEksAccessEntry(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEksAccessEntry
      _type='aws_eks_access_entry'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEksAccessEntry = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEksAccessEntry, node, id)

export const useDataAwsEksAccessEntrys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEksAccessEntry, node, id)
