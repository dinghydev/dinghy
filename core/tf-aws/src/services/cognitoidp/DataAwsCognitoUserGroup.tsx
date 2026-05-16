import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCognitoUserGroup } from './AwsCognitoUserGroup.tsx'

export const DataAwsCognitoUserGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  user_pool_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsCognitoUserGroupOutputSchema = z.object({
  description: z.string().optional(),
  id: z.string().optional(),
  precedence: z.number().optional(),
  role_arn: z.string().optional(),
})

export type DataAwsCognitoUserGroupInputProps =
  & z.input<typeof DataAwsCognitoUserGroupInputSchema>
  & NodeProps

export type DataAwsCognitoUserGroupOutputProps =
  & z.output<typeof DataAwsCognitoUserGroupOutputSchema>
  & z.output<typeof DataAwsCognitoUserGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cognito_user_group

export function DataAwsCognitoUserGroup(
  props: Partial<DataAwsCognitoUserGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCognitoUserGroup
      _type='aws_cognito_user_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCognitoUserGroupInputSchema}
      _outputSchema={DataAwsCognitoUserGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCognitoUserGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCognitoUserGroupOutputProps>(
    DataAwsCognitoUserGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCognitoUserGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCognitoUserGroupOutputProps>(
    DataAwsCognitoUserGroup,
    idFilter,
    baseNode,
    optional,
  )
