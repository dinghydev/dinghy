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
  provider_details: resolvableValue(z.record(z.string(), z.string())),
  provider_name: resolvableValue(z.string()),
  provider_type: resolvableValue(z.string()),
  user_pool_id: resolvableValue(z.string()),
  attribute_mapping: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  idp_identifiers: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cognito_identity_provider

export function AwsCognitoIdentityProvider(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_identity_provider'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoIdentityProvider = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCognitoIdentityProvider,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoIdentityProviders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCognitoIdentityProvider,
    idFilter,
    baseNode,
    optional,
  )
