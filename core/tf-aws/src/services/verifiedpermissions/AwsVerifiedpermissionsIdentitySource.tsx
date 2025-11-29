import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/verifiedpermissions_identity_source

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  policy_store_id: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      cognito_user_pool_configuration: z.object({
        client_ids: z.string().array().optional(),
        user_pool_arn: z.string(),
      }).optional(),
      open_id_connect_configuration: z.object({
        entity_id_prefix: z.string().optional(),
        issuer: z.string(),
      }).optional(),
    }).optional(),
  ),
  principal_entity_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVerifiedpermissionsIdentitySource(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsVerifiedpermissionsIdentitySource, node, id)

export const useAwsVerifiedpermissionsIdentitySources = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsVerifiedpermissionsIdentitySource, node, id)
