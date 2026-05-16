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

export const AwsCognitoIdentityPoolRolesAttachmentInputSchema = TfMetaSchema
  .extend({
    identity_pool_id: resolvableValue(z.string()),
    roles: resolvableValue(z.record(z.string(), z.string())),
    region: resolvableValue(z.string().optional()),
    role_mapping: resolvableValue(
      z.object({
        ambiguous_role_resolution: z.string().optional(),
        identity_provider: z.string(),
        type: z.string(),
        mapping_rule: z.object({
          claim: z.string(),
          match_type: z.string(),
          role_arn: z.string(),
          value: z.string(),
        }).array().optional(),
      }).array().optional(),
    ),
  })

export const AwsCognitoIdentityPoolRolesAttachmentOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsCognitoIdentityPoolRolesAttachmentInputProps =
  & z.input<typeof AwsCognitoIdentityPoolRolesAttachmentInputSchema>
  & NodeProps

export type AwsCognitoIdentityPoolRolesAttachmentOutputProps =
  & z.output<typeof AwsCognitoIdentityPoolRolesAttachmentOutputSchema>
  & z.output<typeof AwsCognitoIdentityPoolRolesAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cognito_identity_pool_roles_attachment

export function AwsCognitoIdentityPoolRolesAttachment(
  props: Partial<AwsCognitoIdentityPoolRolesAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_identity_pool_roles_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCognitoIdentityPoolRolesAttachmentInputSchema}
      _outputSchema={AwsCognitoIdentityPoolRolesAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoIdentityPoolRolesAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCognitoIdentityPoolRolesAttachmentOutputProps>(
    AwsCognitoIdentityPoolRolesAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoIdentityPoolRolesAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCognitoIdentityPoolRolesAttachmentOutputProps>(
    AwsCognitoIdentityPoolRolesAttachment,
    idFilter,
    baseNode,
    optional,
  )
