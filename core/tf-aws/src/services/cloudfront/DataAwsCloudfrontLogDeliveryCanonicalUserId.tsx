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

export const DataAwsCloudfrontLogDeliveryCanonicalUserIdInputSchema =
  TfMetaSchema.extend({
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsCloudfrontLogDeliveryCanonicalUserIdOutputSchema = z.object(
  {
    id: z.string().optional(),
  },
)

export type DataAwsCloudfrontLogDeliveryCanonicalUserIdInputProps =
  & z.input<typeof DataAwsCloudfrontLogDeliveryCanonicalUserIdInputSchema>
  & NodeProps

export type DataAwsCloudfrontLogDeliveryCanonicalUserIdOutputProps =
  & z.output<typeof DataAwsCloudfrontLogDeliveryCanonicalUserIdOutputSchema>
  & z.output<typeof DataAwsCloudfrontLogDeliveryCanonicalUserIdInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudfront_log_delivery_canonical_user_id

export function DataAwsCloudfrontLogDeliveryCanonicalUserId(
  props: Partial<DataAwsCloudfrontLogDeliveryCanonicalUserIdInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_log_delivery_canonical_user_id'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudfrontLogDeliveryCanonicalUserIdInputSchema}
      _outputSchema={DataAwsCloudfrontLogDeliveryCanonicalUserIdOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCloudfrontLogDeliveryCanonicalUserId = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCloudfrontLogDeliveryCanonicalUserIdOutputProps>(
    DataAwsCloudfrontLogDeliveryCanonicalUserId,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudfrontLogDeliveryCanonicalUserIds = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudfrontLogDeliveryCanonicalUserIdOutputProps>(
    DataAwsCloudfrontLogDeliveryCanonicalUserId,
    idFilter,
    baseNode,
    optional,
  )
