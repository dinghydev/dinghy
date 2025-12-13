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

export const InputSchema = z.object({
  creation_date: resolvableValue(z.string()),
  last_modified_date: resolvableValue(z.string()),
  mfa_setting_list: resolvableValue(z.string().array()),
  preferred_mfa_setting: resolvableValue(z.string()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  status: z.string().optional(),
  sub: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cognito_user

export function AwsCognitoUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoUser = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsCognitoUser, idFilter, baseNode)

export const useAwsCognitoUsers = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsCognitoUser, idFilter, baseNode)
