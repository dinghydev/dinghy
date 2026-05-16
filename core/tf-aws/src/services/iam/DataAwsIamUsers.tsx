import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsIamUsersInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  name_regex: resolvableValue(z.string().optional()),
  path_prefix: resolvableValue(z.string().optional()),
})

export const DataAwsIamUsersOutputSchema = z.object({
  arns: z.set(z.string()).optional(),
  names: z.set(z.string()).optional(),
})

export type DataAwsIamUsersInputProps =
  & z.input<typeof DataAwsIamUsersInputSchema>
  & NodeProps

export type DataAwsIamUsersOutputProps =
  & z.output<typeof DataAwsIamUsersOutputSchema>
  & z.output<typeof DataAwsIamUsersInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_users

export function DataAwsIamUsers(props: Partial<DataAwsIamUsersInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_users'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamUsersInputSchema}
      _outputSchema={DataAwsIamUsersOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIamUserss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamUsersOutputProps>(
    DataAwsIamUsers,
    idFilter,
    baseNode,
    optional,
  )
