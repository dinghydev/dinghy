import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsCognitoUserGroupsInputSchema = TfMetaSchema.extend({
  user_pool_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCognitoUserGroupsOutputSchema = z.object({
  groups: z.object({
    description: z.string(),
    group_name: z.string(),
    precedence: z.number(),
    role_arn: z.string(),
  }).array().optional(),
  id: z.string().optional(),
})

export type DataAwsCognitoUserGroupsInputProps =
  & z.input<typeof DataAwsCognitoUserGroupsInputSchema>
  & NodeProps

export type DataAwsCognitoUserGroupsOutputProps =
  & z.output<typeof DataAwsCognitoUserGroupsOutputSchema>
  & z.output<typeof DataAwsCognitoUserGroupsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cognito_user_groups

export function DataAwsCognitoUserGroups(
  props: Partial<DataAwsCognitoUserGroupsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user_groups'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCognitoUserGroupsInputSchema}
      _outputSchema={DataAwsCognitoUserGroupsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCognitoUserGroupss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCognitoUserGroupsOutputProps>(
    DataAwsCognitoUserGroups,
    idFilter,
    baseNode,
    optional,
  )
