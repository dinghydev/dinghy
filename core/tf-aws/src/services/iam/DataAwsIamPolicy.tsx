import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamPolicy } from './AwsIamPolicy.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_policy

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  path_prefix: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  attachment_count: z.number().optional(),
  description: z.string().optional(),
  path: z.string().optional(),
  policy: z.string().optional(),
  policy_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsIamPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsIamPolicy
      _type='aws_iam_policy'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsIamPolicy, node, id)

export const useDataAwsIamPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsIamPolicy, node, id)
