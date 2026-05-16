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

export const AwsIamRolePolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  role: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
})

export const AwsIamRolePolicyOutputSchema = z.object({})

export const AwsIamRolePolicyImportSchema = z.object({
  name: resolvableValue(z.string()),
  role: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsIamRolePolicyInputProps =
  & z.input<typeof AwsIamRolePolicyInputSchema>
  & z.input<typeof AwsIamRolePolicyImportSchema>
  & NodeProps

export type AwsIamRolePolicyOutputProps =
  & z.output<typeof AwsIamRolePolicyOutputSchema>
  & z.output<typeof AwsIamRolePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_role_policy

export function AwsIamRolePolicy(props: Partial<AwsIamRolePolicyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_role_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamRolePolicyInputSchema}
      _outputSchema={AwsIamRolePolicyOutputSchema}
      _importSchema={AwsIamRolePolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsIamRolePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamRolePolicyOutputProps>(
    AwsIamRolePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamRolePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamRolePolicyOutputProps>(
    AwsIamRolePolicy,
    idFilter,
    baseNode,
    optional,
  )
