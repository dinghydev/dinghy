import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cognito_identity_pool_roles_attachment

export const InputSchema = z.object({
  identity_pool_id: resolvableValue(z.string()),
  roles: resolvableValue(z.record(z.string(), z.string())),
  region: resolvableValue(z.string().optional()),
  role_mapping: resolvableValue(
    z.object({
      ambiguous_role_resolution: z.string().optional(),
      identity_provider: z.string(),
      type: z.string(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCognitoIdentityPoolRolesAttachment(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_identity_pool_roles_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoIdentityPoolRolesAttachment = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsCognitoIdentityPoolRolesAttachment, node, id)

export const useAwsCognitoIdentityPoolRolesAttachments = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsCognitoIdentityPoolRolesAttachment, node, id)
