import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudfront_log_delivery_canonical_user_id

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCloudfrontLogDeliveryCanonicalUserId(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_log_delivery_canonical_user_id'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCloudfrontLogDeliveryCanonicalUserId = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    DataAwsCloudfrontLogDeliveryCanonicalUserId,
    node,
    id,
  )

export const useDataAwsCloudfrontLogDeliveryCanonicalUserIds = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCloudfrontLogDeliveryCanonicalUserId,
    node,
    id,
  )
