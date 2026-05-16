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

export const AwsAppfabricAppAuthorizationConnectionInputSchema = TfMetaSchema
  .extend({
    app_authorization_arn: resolvableValue(z.string()),
    app_bundle_arn: resolvableValue(z.string()),
    auth_request: resolvableValue(
      z.object({
        code: z.string(),
        redirect_uri: z.string(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsAppfabricAppAuthorizationConnectionOutputSchema = z.object({
  app: z.string().optional(),
  id: z.string().optional(),
  tenant: z.object({
    tenant_display_name: z.string(),
    tenant_identifier: z.string(),
  }).array().optional(),
})

export type AwsAppfabricAppAuthorizationConnectionInputProps =
  & z.input<typeof AwsAppfabricAppAuthorizationConnectionInputSchema>
  & NodeProps

export type AwsAppfabricAppAuthorizationConnectionOutputProps =
  & z.output<typeof AwsAppfabricAppAuthorizationConnectionOutputSchema>
  & z.output<typeof AwsAppfabricAppAuthorizationConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appfabric_app_authorization_connection

export function AwsAppfabricAppAuthorizationConnection(
  props: Partial<AwsAppfabricAppAuthorizationConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appfabric_app_authorization_connection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppfabricAppAuthorizationConnectionInputSchema}
      _outputSchema={AwsAppfabricAppAuthorizationConnectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppfabricAppAuthorizationConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppfabricAppAuthorizationConnectionOutputProps>(
    AwsAppfabricAppAuthorizationConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppfabricAppAuthorizationConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppfabricAppAuthorizationConnectionOutputProps>(
    AwsAppfabricAppAuthorizationConnection,
    idFilter,
    baseNode,
    optional,
  )
