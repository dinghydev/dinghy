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

export const DataAwsIamPolicyInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  path_prefix: resolvableValue(z.string().optional()),
})

export const DataAwsIamPolicyOutputSchema = z.object({
  arn: z.string().optional(),
  attachment_count: z.number().optional(),
  description: z.string().optional(),
  path: z.string().optional(),
  policy: z.string().optional(),
  policy_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsIamPolicyInputProps =
  & z.input<typeof DataAwsIamPolicyInputSchema>
  & NodeProps

export type DataAwsIamPolicyOutputProps =
  & z.output<typeof DataAwsIamPolicyOutputSchema>
  & z.output<typeof DataAwsIamPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_policy

export function DataAwsIamPolicy(props: Partial<DataAwsIamPolicyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsIamPolicy
      _type='aws_iam_policy'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamPolicyInputSchema}
      _outputSchema={DataAwsIamPolicyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsIamPolicyOutputProps>(
    DataAwsIamPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIamPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamPolicyOutputProps>(
    DataAwsIamPolicy,
    idFilter,
    baseNode,
    optional,
  )
