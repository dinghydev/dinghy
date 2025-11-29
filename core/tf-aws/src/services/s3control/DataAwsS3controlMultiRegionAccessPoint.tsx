import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3controlMultiRegionAccessPoint } from './AwsS3controlMultiRegionAccessPoint.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/s3control_multi_region_access_point

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  alias: z.string().optional(),
  arn: z.string().optional(),
  created_at: z.string().optional(),
  domain_name: z.string().optional(),
  public_access_block: z.object({
    block_public_acls: z.boolean(),
    block_public_policy: z.boolean(),
    ignore_public_acls: z.boolean(),
    restrict_public_buckets: z.boolean(),
  }).array().optional(),
  regions: z.object({
    bucket: z.string(),
    bucket_account_id: z.string(),
    region: z.string(),
  }).array().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsS3controlMultiRegionAccessPoint(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsS3controlMultiRegionAccessPoint
      _type='aws_s3control_multi_region_access_point'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3controlMultiRegionAccessPoint = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsS3controlMultiRegionAccessPoint, node, id)

export const useDataAwsS3controlMultiRegionAccessPoints = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(DataAwsS3controlMultiRegionAccessPoint, node, id)
