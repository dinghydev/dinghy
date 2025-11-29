import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudfront_origin_access_identities

export const InputSchema = z.object({
  comments: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  iam_arns: z.string().array().optional(),
  ids: z.string().array().optional(),
  s3_canonical_user_ids: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCloudfrontOriginAccessIdentities(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_origin_access_identities'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCloudfrontOriginAccessIdentitiess = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(DataAwsCloudfrontOriginAccessIdentities, node, id)
