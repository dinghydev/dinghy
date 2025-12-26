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
  user_pool_id: resolvableValue(z.string()),
  client_id: resolvableValue(z.string().optional()),
  css: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  image_file: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  creation_date: z.string().optional(),
  css_version: z.string().optional(),
  image_url: z.string().optional(),
  last_modified_date: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cognito_user_pool_ui_customization

export function AwsCognitoUserPoolUiCustomization(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user_pool_ui_customization'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoUserPoolUiCustomization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsCognitoUserPoolUiCustomization,
    idFilter,
    baseNode,
    optional,
  )
