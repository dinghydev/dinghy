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

export const InputSchema = TfMetaSchema.extend({
  policy_store_id: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      cognito_user_pool_configuration: z.object({
        client_ids: z.string().array().optional(),
        user_pool_arn: z.string(),
        group_configuration: z.object({
          group_entity_type: z.string(),
        }).array().optional(),
      }).array().optional(),
      open_id_connect_configuration: z.object({
        entity_id_prefix: z.string().optional(),
        issuer: z.string(),
        group_configuration: z.object({
          group_claim: z.string(),
          group_entity_type: z.string(),
        }).array().optional(),
        token_selection: z.object({
          access_token_only: z.object({
            audiences: z.string().array().optional(),
            principal_id_claim: z.string().optional(),
          }).array().optional(),
          identity_token_only: z.object({
            client_ids: z.string().array().optional(),
            principal_id_claim: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  principal_entity_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/verifiedpermissions_identity_source

export function AwsVerifiedpermissionsIdentitySource(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedpermissions_identity_source'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedpermissionsIdentitySource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsVerifiedpermissionsIdentitySource,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVerifiedpermissionsIdentitySources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsVerifiedpermissionsIdentitySource,
    idFilter,
    baseNode,
    optional,
  )
