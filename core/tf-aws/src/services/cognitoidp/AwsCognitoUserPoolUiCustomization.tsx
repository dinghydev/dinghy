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

export const AwsCognitoUserPoolUiCustomizationInputSchema = TfMetaSchema.extend(
  {
    user_pool_id: resolvableValue(z.string()),
    client_id: resolvableValue(z.string().optional()),
    css: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    image_file: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsCognitoUserPoolUiCustomizationOutputSchema = z.object({
  creation_date: z.string().optional(),
  css_version: z.string().optional(),
  image_url: z.string().optional(),
  last_modified_date: z.string().optional(),
})

export type AwsCognitoUserPoolUiCustomizationInputProps =
  & z.input<typeof AwsCognitoUserPoolUiCustomizationInputSchema>
  & NodeProps

export type AwsCognitoUserPoolUiCustomizationOutputProps =
  & z.output<typeof AwsCognitoUserPoolUiCustomizationOutputSchema>
  & z.output<typeof AwsCognitoUserPoolUiCustomizationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cognito_user_pool_ui_customization

export function AwsCognitoUserPoolUiCustomization(
  props: Partial<AwsCognitoUserPoolUiCustomizationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user_pool_ui_customization'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCognitoUserPoolUiCustomizationInputSchema}
      _outputSchema={AwsCognitoUserPoolUiCustomizationOutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoUserPoolUiCustomization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCognitoUserPoolUiCustomizationOutputProps>(
    AwsCognitoUserPoolUiCustomization,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoUserPoolUiCustomizations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCognitoUserPoolUiCustomizationOutputProps>(
    AwsCognitoUserPoolUiCustomization,
    idFilter,
    baseNode,
    optional,
  )
