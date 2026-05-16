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

export const AwsCognitoManagedLoginBrandingInputSchema = TfMetaSchema.extend({
  client_id: resolvableValue(z.string()),
  user_pool_id: resolvableValue(z.string()),
  asset: resolvableValue(
    z.object({
      bytes: z.string().optional(),
      category: z.string(),
      color_mode: z.string(),
      extension: z.string(),
      resource_id: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  settings: resolvableValue(z.string().optional()),
  use_cognito_provided_values: resolvableValue(z.boolean().optional()),
})

export const AwsCognitoManagedLoginBrandingOutputSchema = z.object({
  managed_login_branding_id: z.string().optional(),
  settings_all: z.string().optional(),
})

export type AwsCognitoManagedLoginBrandingInputProps =
  & z.input<typeof AwsCognitoManagedLoginBrandingInputSchema>
  & NodeProps

export type AwsCognitoManagedLoginBrandingOutputProps =
  & z.output<typeof AwsCognitoManagedLoginBrandingOutputSchema>
  & z.output<typeof AwsCognitoManagedLoginBrandingInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cognito_managed_login_branding

export function AwsCognitoManagedLoginBranding(
  props: Partial<AwsCognitoManagedLoginBrandingInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_managed_login_branding'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCognitoManagedLoginBrandingInputSchema}
      _outputSchema={AwsCognitoManagedLoginBrandingOutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoManagedLoginBranding = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCognitoManagedLoginBrandingOutputProps>(
    AwsCognitoManagedLoginBranding,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoManagedLoginBrandings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCognitoManagedLoginBrandingOutputProps>(
    AwsCognitoManagedLoginBranding,
    idFilter,
    baseNode,
    optional,
  )
