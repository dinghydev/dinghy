import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamRole } from './AwsIamRole.tsx'

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  assume_role_policy: z.string().optional(),
  create_date: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  max_session_duration: z.number().optional(),
  path: z.string().optional(),
  permissions_boundary: z.string().optional(),
  role_last_used: z.object({
    last_used_date: z.string(),
    region: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  unique_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/iam_role

export function DataAwsIamRole(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsIamRole
      _type='aws_iam_role'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamRole = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsIamRole, idFilter, baseNode, optional)

export const useDataAwsIamRoles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsIamRole, idFilter, baseNode, optional)
