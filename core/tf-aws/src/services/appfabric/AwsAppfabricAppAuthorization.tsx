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

export const AwsAppfabricAppAuthorizationInputSchema = TfMetaSchema.extend({
  app: resolvableValue(z.string()),
  app_bundle_arn: resolvableValue(z.string()),
  auth_type: resolvableValue(z.string()),
  credential: resolvableValue(
    z.object({
      api_key_credential: z.object({
        api_key: z.string(),
      }).array().optional(),
      oauth2_credential: z.object({
        client_id: z.string(),
        client_secret: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tenant: resolvableValue(
    z.object({
      tenant_display_name: z.string(),
      tenant_identifier: z.string(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsAppfabricAppAuthorizationOutputSchema = z.object({
  arn: z.string().optional(),
  auth_url: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  persona: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
})

export type AwsAppfabricAppAuthorizationInputProps =
  & z.input<typeof AwsAppfabricAppAuthorizationInputSchema>
  & NodeProps

export type AwsAppfabricAppAuthorizationOutputProps =
  & z.output<typeof AwsAppfabricAppAuthorizationOutputSchema>
  & z.output<typeof AwsAppfabricAppAuthorizationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appfabric_app_authorization

export function AwsAppfabricAppAuthorization(
  props: Partial<AwsAppfabricAppAuthorizationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appfabric_app_authorization'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppfabricAppAuthorizationInputSchema}
      _outputSchema={AwsAppfabricAppAuthorizationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppfabricAppAuthorization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppfabricAppAuthorizationOutputProps>(
    AwsAppfabricAppAuthorization,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppfabricAppAuthorizations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppfabricAppAuthorizationOutputProps>(
    AwsAppfabricAppAuthorization,
    idFilter,
    baseNode,
    optional,
  )
