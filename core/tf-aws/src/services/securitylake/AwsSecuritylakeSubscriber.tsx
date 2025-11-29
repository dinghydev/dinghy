import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/securitylake_subscriber

export const InputSchema = z.object({
  access_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source: resolvableValue(
    z.object({
      aws_log_source_resource: z.object({
        source_name: z.string(),
        source_version: z.string().optional(),
      }).optional(),
      custom_log_source_resource: z.object({
        attributes: z.object({
          crawler_arn: z.string(),
          database_arn: z.string(),
          table_arn: z.string(),
        }).array(),
        provider: z.object({
          location: z.string(),
          role_arn: z.string(),
        }).array(),
        source_name: z.string(),
        source_version: z.string().optional(),
      }).optional(),
    }).array().optional(),
  ),
  subscriber_description: resolvableValue(z.string().optional()),
  subscriber_identity: resolvableValue(
    z.object({
      external_id: z.string(),
      principal: z.string(),
    }).optional(),
  ),
  subscriber_name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  resource_share_arn: z.string().optional(),
  resource_share_name: z.string().optional(),
  role_arn: z.string().optional(),
  s3_bucket_arn: z.string().optional(),
  subscriber_endpoint: z.string().optional(),
  subscriber_status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSecuritylakeSubscriber(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securitylake_subscriber'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSecuritylakeSubscriber = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSecuritylakeSubscriber, node, id)

export const useAwsSecuritylakeSubscribers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSecuritylakeSubscriber, node, id)
