import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudtrail

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  s3_bucket_name: resolvableValue(z.string()),
  advanced_event_selector: resolvableValue(
    z.object({
      name: z.string().optional(),
    }).optional(),
  ),
  cloud_watch_logs_group_arn: resolvableValue(z.string().optional()),
  cloud_watch_logs_role_arn: resolvableValue(z.string().optional()),
  enable_log_file_validation: resolvableValue(z.boolean().optional()),
  enable_logging: resolvableValue(z.boolean().optional()),
  event_selector: resolvableValue(
    z.object({
      exclude_management_event_sources: z.string().array().optional(),
      include_management_events: z.boolean().optional(),
      read_write_type: z.string().optional(),
    }).optional(),
  ),
  include_global_service_events: resolvableValue(z.boolean().optional()),
  insight_selector: resolvableValue(
    z.object({
      insight_type: z.string(),
    }).array().optional(),
  ),
  is_multi_region_trail: resolvableValue(z.boolean().optional()),
  is_organization_trail: resolvableValue(z.boolean().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  s3_key_prefix: resolvableValue(z.string().optional()),
  sns_topic_name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  home_region: z.string().optional(),
  id: z.string().optional(),
  sns_topic_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudtrail(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudtrail'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudtrail = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudtrail, node, id)

export const useAwsCloudtrails = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudtrail, node, id)
