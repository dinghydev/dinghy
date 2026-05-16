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

export const AwsWorkspaceswebIdentityProviderInputSchema = TfMetaSchema.extend({
  identity_provider_details: resolvableValue(z.record(z.string(), z.string())),
  identity_provider_name: resolvableValue(z.string()),
  identity_provider_type: resolvableValue(z.string()),
  portal_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWorkspaceswebIdentityProviderOutputSchema = z.object({
  identity_provider_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWorkspaceswebIdentityProviderInputProps =
  & z.input<typeof AwsWorkspaceswebIdentityProviderInputSchema>
  & NodeProps

export type AwsWorkspaceswebIdentityProviderOutputProps =
  & z.output<typeof AwsWorkspaceswebIdentityProviderOutputSchema>
  & z.output<typeof AwsWorkspaceswebIdentityProviderInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/workspacesweb_identity_provider

export function AwsWorkspaceswebIdentityProvider(
  props: Partial<AwsWorkspaceswebIdentityProviderInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_identity_provider'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWorkspaceswebIdentityProviderInputSchema}
      _outputSchema={AwsWorkspaceswebIdentityProviderOutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebIdentityProvider = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWorkspaceswebIdentityProviderOutputProps>(
    AwsWorkspaceswebIdentityProvider,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspaceswebIdentityProviders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWorkspaceswebIdentityProviderOutputProps>(
    AwsWorkspaceswebIdentityProvider,
    idFilter,
    baseNode,
    optional,
  )
