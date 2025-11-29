import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_public_key

export const InputSchema = z.object({
  encoded_key: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  caller_reference: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudfrontPublicKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_public_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontPublicKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudfrontPublicKey, node, id)

export const useAwsCloudfrontPublicKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudfrontPublicKey, node, id)
