import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3AccessPoint } from './AwsS3AccessPoint.tsx'

export const DataAwsS3AccessPointInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsS3AccessPointOutputSchema = z.object({
  alias: z.string().optional(),
  arn: z.string().optional(),
  bucket: z.string().optional(),
  bucket_account_id: z.string().optional(),
  data_source_id: z.string().optional(),
  data_source_type: z.string().optional(),
  endpoints: z.record(z.string(), z.string()).optional(),
  network_origin: z.string().optional(),
  public_access_block_configuration: z.object({
    block_public_acls: z.boolean(),
    block_public_policy: z.boolean(),
    ignore_public_acls: z.boolean(),
    restrict_public_buckets: z.boolean(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vpc_configuration: z.object({
    vpc_id: z.string(),
  }).array().optional(),
})

export type DataAwsS3AccessPointInputProps =
  & z.input<typeof DataAwsS3AccessPointInputSchema>
  & NodeProps

export type DataAwsS3AccessPointOutputProps =
  & z.output<typeof DataAwsS3AccessPointOutputSchema>
  & z.output<typeof DataAwsS3AccessPointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3_access_point

export function DataAwsS3AccessPoint(
  props: Partial<DataAwsS3AccessPointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsS3AccessPoint
      _type='aws_s3_access_point'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsS3AccessPointInputSchema}
      _outputSchema={DataAwsS3AccessPointOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3AccessPoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsS3AccessPointOutputProps>(
    DataAwsS3AccessPoint,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsS3AccessPoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsS3AccessPointOutputProps>(
    DataAwsS3AccessPoint,
    idFilter,
    baseNode,
    optional,
  )
