import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsCloudfrontOriginAccessIdentitiesInputSchema = TfMetaSchema
  .extend({
    comments: resolvableValue(z.string().array().optional()),
    id: resolvableValue(z.string().optional()),
  })

export const DataAwsCloudfrontOriginAccessIdentitiesOutputSchema = z.object({
  iam_arns: z.set(z.string()).optional(),
  ids: z.set(z.string()).optional(),
  s3_canonical_user_ids: z.set(z.string()).optional(),
})

export type DataAwsCloudfrontOriginAccessIdentitiesInputProps =
  & z.input<typeof DataAwsCloudfrontOriginAccessIdentitiesInputSchema>
  & NodeProps

export type DataAwsCloudfrontOriginAccessIdentitiesOutputProps =
  & z.output<typeof DataAwsCloudfrontOriginAccessIdentitiesOutputSchema>
  & z.output<typeof DataAwsCloudfrontOriginAccessIdentitiesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudfront_origin_access_identities

export function DataAwsCloudfrontOriginAccessIdentities(
  props: Partial<DataAwsCloudfrontOriginAccessIdentitiesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_origin_access_identities'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudfrontOriginAccessIdentitiesInputSchema}
      _outputSchema={DataAwsCloudfrontOriginAccessIdentitiesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCloudfrontOriginAccessIdentitiess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudfrontOriginAccessIdentitiesOutputProps>(
    DataAwsCloudfrontOriginAccessIdentities,
    idFilter,
    baseNode,
    optional,
  )
