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

export const InputSchema = z.object({
  assume_role_policy: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  force_detach_policies: resolvableValue(z.boolean().optional()),
  inline_policy: resolvableValue(
    z.object({
      name: z.string().optional(),
      policy: z.string().optional(),
    }).array().optional(),
  ),
  managed_policy_arns: resolvableValue(z.string().array().optional()),
  max_session_duration: resolvableValue(z.number().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  path: resolvableValue(z.string().optional()),
  permissions_boundary: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  create_date: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  unique_id: z.string().optional(),
})

export const ImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iam_role

export function AwsIamRole(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_role'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsIamRole = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsIamRole, idFilter, baseNode)

export const useAwsIamRoles = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsIamRole, idFilter, baseNode)
