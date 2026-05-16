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

export const AwsS3controlMultiRegionAccessPointInputSchema = TfMetaSchema
  .extend({
    details: resolvableValue(z.object({
      name: z.string(),
      public_access_block: z.object({
        block_public_acls: z.boolean().optional(),
        block_public_policy: z.boolean().optional(),
        ignore_public_acls: z.boolean().optional(),
        restrict_public_buckets: z.boolean().optional(),
      }).optional(),
      region: z.object({
        bucket: z.string(),
        bucket_account_id: z.string().optional(),
        region: z.string().optional(),
      }).array(),
    })),
    account_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsS3controlMultiRegionAccessPointOutputSchema = z.object({
  alias: z.string().optional(),
  arn: z.string().optional(),
  domain_name: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
})

export type AwsS3controlMultiRegionAccessPointInputProps =
  & z.input<typeof AwsS3controlMultiRegionAccessPointInputSchema>
  & NodeProps

export type AwsS3controlMultiRegionAccessPointOutputProps =
  & z.output<typeof AwsS3controlMultiRegionAccessPointOutputSchema>
  & z.output<typeof AwsS3controlMultiRegionAccessPointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3control_multi_region_access_point

export function AwsS3controlMultiRegionAccessPoint(
  props: Partial<AwsS3controlMultiRegionAccessPointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_multi_region_access_point'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3controlMultiRegionAccessPointInputSchema}
      _outputSchema={AwsS3controlMultiRegionAccessPointOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlMultiRegionAccessPoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3controlMultiRegionAccessPointOutputProps>(
    AwsS3controlMultiRegionAccessPoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3controlMultiRegionAccessPoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3controlMultiRegionAccessPointOutputProps>(
    AwsS3controlMultiRegionAccessPoint,
    idFilter,
    baseNode,
    optional,
  )
