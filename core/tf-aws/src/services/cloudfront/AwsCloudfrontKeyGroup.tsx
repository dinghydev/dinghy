import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_key_group

export const InputSchema = z.object({
  items: resolvableValue(z.string().array()),
  name: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  etag: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudfrontKeyGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_key_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontKeyGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudfrontKeyGroup, node, id)

export const useAwsCloudfrontKeyGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudfrontKeyGroup, node, id)
