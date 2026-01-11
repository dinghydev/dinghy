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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  managed_login_branding_id: z.string().optional(),
  settings_all: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cognito_managed_login_branding

export function AwsCognitoManagedLoginBranding(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_managed_login_branding'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoManagedLoginBranding = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsCognitoManagedLoginBranding,
    idFilter,
    baseNode,
    optional,
  )
