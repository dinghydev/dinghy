import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsIamRolesInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  name_regex: resolvableValue(z.string().optional()),
  path_prefix: resolvableValue(z.string().optional()),
})

export const DataAwsIamRolesOutputSchema = z.object({
  arns: z.set(z.string()).optional(),
  names: z.set(z.string()).optional(),
})

export type DataAwsIamRolesInputProps =
  & z.input<typeof DataAwsIamRolesInputSchema>
  & NodeProps

export type DataAwsIamRolesOutputProps =
  & z.output<typeof DataAwsIamRolesOutputSchema>
  & z.output<typeof DataAwsIamRolesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_roles

export function DataAwsIamRoles(props: Partial<DataAwsIamRolesInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_roles'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamRolesInputSchema}
      _outputSchema={DataAwsIamRolesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIamRoless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamRolesOutputProps>(
    DataAwsIamRoles,
    idFilter,
    baseNode,
    optional,
  )
