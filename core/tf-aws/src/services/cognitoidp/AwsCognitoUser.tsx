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

export const AwsCognitoUserInputSchema = TfMetaSchema.extend({
  user_pool_id: resolvableValue(z.string()),
  username: resolvableValue(z.string()),
  attributes: resolvableValue(z.record(z.string(), z.string()).optional()),
  client_metadata: resolvableValue(z.record(z.string(), z.string()).optional()),
  desired_delivery_mediums: resolvableValue(z.string().array().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  force_alias_creation: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  message_action: resolvableValue(z.string().optional()),
  password: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  temporary_password: resolvableValue(z.string().optional()),
  validation_data: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCognitoUserOutputSchema = z.object({
  creation_date: z.string().optional(),
  last_modified_date: z.string().optional(),
  mfa_setting_list: z.set(z.string()).optional(),
  preferred_mfa_setting: z.string().optional(),
  status: z.string().optional(),
  sub: z.string().optional(),
})

export type AwsCognitoUserInputProps =
  & z.input<typeof AwsCognitoUserInputSchema>
  & NodeProps

export type AwsCognitoUserOutputProps =
  & z.output<typeof AwsCognitoUserOutputSchema>
  & z.output<typeof AwsCognitoUserInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cognito_user

export function AwsCognitoUser(props: Partial<AwsCognitoUserInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCognitoUserInputSchema}
      _outputSchema={AwsCognitoUserOutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCognitoUserOutputProps>(
    AwsCognitoUser,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCognitoUserOutputProps>(
    AwsCognitoUser,
    idFilter,
    baseNode,
    optional,
  )
