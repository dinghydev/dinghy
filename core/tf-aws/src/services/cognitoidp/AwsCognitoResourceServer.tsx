import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cognito_resource_server

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  scope_identifiers: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCognitoResourceServer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_resource_server'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoResourceServer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCognitoResourceServer, node, id)

export const useAwsCognitoResourceServers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCognitoResourceServer, node, id)
