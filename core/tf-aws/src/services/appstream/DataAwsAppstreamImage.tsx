import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/appstream_image

export const InputSchema = z.object({
  applications: resolvableValue(
    z.object({
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
    }).array(),
  ),
  public_base_image_released_date: resolvableValue(z.string()),
  state_change_reason: resolvableValue(
    z.object({
      code: z.string(),
      message: z.string(),
    }).array(),
  ),
  most_recent: resolvableValue(z.boolean().optional()),
  name: resolvableValue(z.string().optional()),
  name_regex: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
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
  state: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsAppstreamImage(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appstream_image'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsAppstreamImage = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsAppstreamImage, node, id)

export const useDataAwsAppstreamImages = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsAppstreamImage, node, id)
