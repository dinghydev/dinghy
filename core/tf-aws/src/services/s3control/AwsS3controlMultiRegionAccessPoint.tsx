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

export const InputSchema = z.object({
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
      region: z.string(),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  alias: z.string().optional(),
  arn: z.string().optional(),
  domain_name: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3control_multi_region_access_point

export function AwsS3controlMultiRegionAccessPoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_multi_region_access_point'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlMultiRegionAccessPoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsS3controlMultiRegionAccessPoint,
    idFilter,
    baseNode,
    optional,
  )
