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

export const DataAwsAppstreamImageInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string().optional()),
  most_recent: resolvableValue(z.boolean().optional()),
  name: resolvableValue(z.string().optional()),
  name_regex: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  type: resolvableValue(z.string().optional()),
})

export const DataAwsAppstreamImageOutputSchema = z.object({
  applications: z.object({
    app_block_arn: z.string(),
    arn: z.string(),
    created_time: z.string(),
    description: z.string(),
    display_name: z.string(),
    enabled: z.boolean(),
    icon_s3_location: z.object({
      s3_bucket: z.string(),
      s3_key: z.string(),
    }).array(),
    icon_url: z.string(),
    instance_families: z.string().array(),
    launch_parameters: z.string(),
    launch_path: z.string(),
    metadata: z.record(z.string(), z.string()),
    name: z.string(),
    platforms: z.string().array(),
    working_directory: z.string(),
  }).array().optional(),
  appstream_agent_version: z.string().optional(),
  arn: z.string().optional(),
  base_image_arn: z.string().optional(),
  created_time: z.string().optional(),
  description: z.string().optional(),
  display_name: z.string().optional(),
  image_builder_name: z.string().optional(),
  image_builder_supported: z.boolean().optional(),
  image_permissions: z.object({
    allow_fleet: z.boolean(),
    allow_image_builder: z.boolean(),
  }).array().optional(),
  platform: z.string().optional(),
  public_base_image_released_date: z.string().optional(),
  state: z.string().optional(),
  state_change_reason: z.object({
    code: z.string(),
    message: z.string(),
  }).array().optional(),
})

export type DataAwsAppstreamImageInputProps =
  & z.input<typeof DataAwsAppstreamImageInputSchema>
  & NodeProps

export type DataAwsAppstreamImageOutputProps =
  & z.output<typeof DataAwsAppstreamImageOutputSchema>
  & z.output<typeof DataAwsAppstreamImageInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/appstream_image

export function DataAwsAppstreamImage(
  props: Partial<DataAwsAppstreamImageInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appstream_image'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAppstreamImageInputSchema}
      _outputSchema={DataAwsAppstreamImageOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsAppstreamImage = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsAppstreamImageOutputProps>(
    DataAwsAppstreamImage,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAppstreamImages = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAppstreamImageOutputProps>(
    DataAwsAppstreamImage,
    idFilter,
    baseNode,
    optional,
  )
