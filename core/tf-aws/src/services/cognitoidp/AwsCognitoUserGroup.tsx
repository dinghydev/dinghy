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

export const AwsCognitoUserGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  user_pool_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  precedence: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
})

export const AwsCognitoUserGroupOutputSchema = z.object({})

export type AwsCognitoUserGroupInputProps =
  & z.input<typeof AwsCognitoUserGroupInputSchema>
  & NodeProps

export type AwsCognitoUserGroupOutputProps =
  & z.output<typeof AwsCognitoUserGroupOutputSchema>
  & z.output<typeof AwsCognitoUserGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cognito_user_group

export function AwsCognitoUserGroup(
  props: Partial<AwsCognitoUserGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCognitoUserGroupInputSchema}
      _outputSchema={AwsCognitoUserGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoUserGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCognitoUserGroupOutputProps>(
    AwsCognitoUserGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoUserGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCognitoUserGroupOutputProps>(
    AwsCognitoUserGroup,
    idFilter,
    baseNode,
    optional,
  )
