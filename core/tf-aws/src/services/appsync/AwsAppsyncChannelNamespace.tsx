import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appsync_channel_namespace

export const InputSchema = z.object({
  api_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  code_handlers: resolvableValue(z.string().optional()),
  handler_configs: resolvableValue(
    z.object({
      on_publish: z.object({
        behavior: z.string(),
      }).optional(),
      on_subscribe: z.object({
        behavior: z.string(),
      }).optional(),
    }).optional(),
  ),
  publish_auth_mode: resolvableValue(
    z.object({
      auth_type: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  subscribe_auth_mode: resolvableValue(
    z.object({
      auth_type: z.string(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  channel_namespace_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppsyncChannelNamespace(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_channel_namespace'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncChannelNamespace = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppsyncChannelNamespace, node, id)

export const useAwsAppsyncChannelNamespaces = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppsyncChannelNamespace, node, id)
