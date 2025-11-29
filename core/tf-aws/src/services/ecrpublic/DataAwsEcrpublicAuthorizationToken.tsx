import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ecrpublic_authorization_token

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  authorization_token: z.string().optional(),
  expires_at: z.string().optional(),
  id: z.string().optional(),
  password: z.string().optional(),
  user_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEcrpublicAuthorizationToken(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecrpublic_authorization_token'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcrpublicAuthorizationToken = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsEcrpublicAuthorizationToken, node, id)

export const useDataAwsEcrpublicAuthorizationTokens = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsEcrpublicAuthorizationToken, node, id)
