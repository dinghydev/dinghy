import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_function

export const InputSchema = z.object({
  code: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  runtime: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  key_value_store_associations: resolvableValue(z.string().array().optional()),
  publish: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  live_stage_etag: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudfrontFunction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_function'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontFunction = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudfrontFunction, node, id)

export const useAwsCloudfrontFunctions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudfrontFunction, node, id)
