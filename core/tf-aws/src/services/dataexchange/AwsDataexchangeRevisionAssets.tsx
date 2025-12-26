import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  data_set_id: resolvableValue(z.string()),
  asset: resolvableValue(
    z.object({
      arn: z.string(),
      created_at: z.string(),
      id: z.string(),
      name: z.string(),
      updated_at: z.string(),
      create_s3_data_access_from_s3_bucket: z.object({
        access_point_alias: z.string(),
        access_point_arn: z.string(),
        asset_source: z.object({
          bucket: z.string(),
          key_prefixes: z.string().array().optional(),
          keys: z.string().array().optional(),
          kms_keys_to_grant: z.object({
            kms_key_arn: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      import_assets_from_s3: z.object({
        asset_source: z.object({
          bucket: z.string(),
          key: z.string(),
        }).array().optional(),
      }).array().optional(),
      import_assets_from_signed_url: z.object({
        filename: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  comment: resolvableValue(z.string().optional()),
  finalized: resolvableValue(z.boolean().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dataexchange_revision_assets

export function AwsDataexchangeRevisionAssets(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dataexchange_revision_assets'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDataexchangeRevisionAssetss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDataexchangeRevisionAssets,
    idFilter,
    baseNode,
    optional,
  )
