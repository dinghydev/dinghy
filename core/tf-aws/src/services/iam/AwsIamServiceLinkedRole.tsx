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

export const AwsIamServiceLinkedRoleInputSchema = TfMetaSchema.extend({
  aws_service_name: resolvableValue(z.string()),
  custom_suffix: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsIamServiceLinkedRoleOutputSchema = z.object({
  arn: z.string().optional(),
  create_date: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  path: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  unique_id: z.string().optional(),
})

export const AwsIamServiceLinkedRoleImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsIamServiceLinkedRoleInputProps =
  & z.input<typeof AwsIamServiceLinkedRoleInputSchema>
  & z.input<typeof AwsIamServiceLinkedRoleImportSchema>
  & NodeProps

export type AwsIamServiceLinkedRoleOutputProps =
  & z.output<typeof AwsIamServiceLinkedRoleOutputSchema>
  & z.output<typeof AwsIamServiceLinkedRoleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_service_linked_role

export function AwsIamServiceLinkedRole(
  props: Partial<AwsIamServiceLinkedRoleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_service_linked_role'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamServiceLinkedRoleInputSchema}
      _outputSchema={AwsIamServiceLinkedRoleOutputSchema}
      _importSchema={AwsIamServiceLinkedRoleImportSchema}
      {...props}
    />
  )
}

export const useAwsIamServiceLinkedRole = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamServiceLinkedRoleOutputProps>(
    AwsIamServiceLinkedRole,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamServiceLinkedRoles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamServiceLinkedRoleOutputProps>(
    AwsIamServiceLinkedRole,
    idFilter,
    baseNode,
    optional,
  )
