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

export const AwsCognitoUserInGroupInputSchema = TfMetaSchema.extend({
  group_name: resolvableValue(z.string()),
  user_pool_id: resolvableValue(z.string()),
  username: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsCognitoUserInGroupOutputSchema = z.object({})

export type AwsCognitoUserInGroupInputProps =
  & z.input<typeof AwsCognitoUserInGroupInputSchema>
  & NodeProps

export type AwsCognitoUserInGroupOutputProps =
  & z.output<typeof AwsCognitoUserInGroupOutputSchema>
  & z.output<typeof AwsCognitoUserInGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cognito_user_in_group

export function AwsCognitoUserInGroup(
  props: Partial<AwsCognitoUserInGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user_in_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCognitoUserInGroupInputSchema}
      _outputSchema={AwsCognitoUserInGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoUserInGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCognitoUserInGroupOutputProps>(
    AwsCognitoUserInGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoUserInGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCognitoUserInGroupOutputProps>(
    AwsCognitoUserInGroup,
    idFilter,
    baseNode,
    optional,
  )
