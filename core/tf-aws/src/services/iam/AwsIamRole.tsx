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

export const AwsIamRoleInputSchema = TfMetaSchema.extend({
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
})

export const AwsIamRoleOutputSchema = z.object({
  arn: z.string().optional(),
  create_date: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  unique_id: z.string().optional(),
})

export const AwsIamRoleImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsIamRoleInputProps =
  & z.input<typeof AwsIamRoleInputSchema>
  & z.input<typeof AwsIamRoleImportSchema>
  & NodeProps

export type AwsIamRoleOutputProps =
  & z.output<typeof AwsIamRoleOutputSchema>
  & z.output<typeof AwsIamRoleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_role

export function AwsIamRole(props: Partial<AwsIamRoleInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_role'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamRoleInputSchema}
      _outputSchema={AwsIamRoleOutputSchema}
      _importSchema={AwsIamRoleImportSchema}
      {...props}
    />
  )
}

export const useAwsIamRole = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamRoleOutputProps>(AwsIamRole, idFilter, baseNode, optional)

export const useAwsIamRoles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamRoleOutputProps>(AwsIamRole, idFilter, baseNode, optional)
