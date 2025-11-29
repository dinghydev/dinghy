import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appfabric_app_authorization_connection

export const InputSchema = z.object({
  app_authorization_arn: resolvableValue(z.string()),
  app_bundle_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  auth_request: resolvableValue(
    z.object({
      code: z.string(),
      redirect_uri: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  app: z.string().optional(),
  tenant: z.object({
    tenant_display_name: z.string(),
    tenant_identifier: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppfabricAppAuthorizationConnection(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appfabric_app_authorization_connection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppfabricAppAuthorizationConnection = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsAppfabricAppAuthorizationConnection, node, id)

export const useAwsAppfabricAppAuthorizationConnections = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsAppfabricAppAuthorizationConnection, node, id)
