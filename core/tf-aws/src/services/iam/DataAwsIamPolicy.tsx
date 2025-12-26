import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamPolicy } from './AwsIamPolicy.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  path_prefix: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_policy

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

export const useDataAwsIamPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsIamPolicy, idFilter, baseNode, optional)

export const useDataAwsIamPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsIamPolicy, idFilter, baseNode, optional)
