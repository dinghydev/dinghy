import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsS3controlMultiRegionAccessPointsInputSchema = TfMetaSchema
  .extend({
    account_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsS3controlMultiRegionAccessPointsOutputSchema = z.object({
  access_points: z.object({
    alias: z.string(),
    created_at: z.string(),
    name: z.string(),
    public_access_block: z.object({
      block_public_acls: z.boolean(),
      block_public_policy: z.boolean(),
      ignore_public_acls: z.boolean(),
      restrict_public_buckets: z.boolean(),
    }).array(),
    regions: z.object({
      bucket: z.string(),
      bucket_account_id: z.string(),
      region: z.string(),
    }).array(),
    status: z.string(),
  }).array().optional(),
})

export type DataAwsS3controlMultiRegionAccessPointsInputProps =
  & z.input<typeof DataAwsS3controlMultiRegionAccessPointsInputSchema>
  & NodeProps

export type DataAwsS3controlMultiRegionAccessPointsOutputProps =
  & z.output<typeof DataAwsS3controlMultiRegionAccessPointsOutputSchema>
  & z.output<typeof DataAwsS3controlMultiRegionAccessPointsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3control_multi_region_access_points

export function DataAwsS3controlMultiRegionAccessPoints(
  props: Partial<DataAwsS3controlMultiRegionAccessPointsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_multi_region_access_points'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsS3controlMultiRegionAccessPointsInputSchema}
      _outputSchema={DataAwsS3controlMultiRegionAccessPointsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsS3controlMultiRegionAccessPointss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsS3controlMultiRegionAccessPointsOutputProps>(
    DataAwsS3controlMultiRegionAccessPoints,
    idFilter,
    baseNode,
    optional,
  )
