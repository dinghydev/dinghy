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

export const AwsCognitoResourceServerInputSchema = TfMetaSchema.extend({
  identifier: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  user_pool_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scope: resolvableValue(
    z.object({
      scope_description: z.string(),
      scope_name: z.string(),
    }).array().optional(),
  ),
})

export const AwsCognitoResourceServerOutputSchema = z.object({
  scope_identifiers: z.string().array().optional(),
})

export type AwsCognitoResourceServerInputProps =
  & z.input<typeof AwsCognitoResourceServerInputSchema>
  & NodeProps

export type AwsCognitoResourceServerOutputProps =
  & z.output<typeof AwsCognitoResourceServerOutputSchema>
  & z.output<typeof AwsCognitoResourceServerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cognito_resource_server

export function AwsCognitoResourceServer(
  props: Partial<AwsCognitoResourceServerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_resource_server'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCognitoResourceServerInputSchema}
      _outputSchema={AwsCognitoResourceServerOutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoResourceServer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCognitoResourceServerOutputProps>(
    AwsCognitoResourceServer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoResourceServers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCognitoResourceServerOutputProps>(
    AwsCognitoResourceServer,
    idFilter,
    baseNode,
    optional,
  )
