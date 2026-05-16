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

export const AwsAppsyncChannelNamespaceInputSchema = TfMetaSchema.extend({
  api_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  code_handlers: resolvableValue(z.string().optional()),
  handler_configs: resolvableValue(
    z.object({
      on_publish: z.object({
        behavior: z.string(),
        integration: z.object({
          data_source_name: z.string(),
          lambda_config: z.object({
            invoke_type: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      on_subscribe: z.object({
        behavior: z.string(),
        integration: z.object({
          data_source_name: z.string(),
          lambda_config: z.object({
            invoke_type: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  publish_auth_mode: resolvableValue(
    z.object({
      auth_type: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  subscribe_auth_mode: resolvableValue(
    z.object({
      auth_type: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsAppsyncChannelNamespaceOutputSchema = z.object({
  channel_namespace_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsAppsyncChannelNamespaceInputProps =
  & z.input<typeof AwsAppsyncChannelNamespaceInputSchema>
  & NodeProps

export type AwsAppsyncChannelNamespaceOutputProps =
  & z.output<typeof AwsAppsyncChannelNamespaceOutputSchema>
  & z.output<typeof AwsAppsyncChannelNamespaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appsync_channel_namespace

export function AwsAppsyncChannelNamespace(
  props: Partial<AwsAppsyncChannelNamespaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_channel_namespace'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppsyncChannelNamespaceInputSchema}
      _outputSchema={AwsAppsyncChannelNamespaceOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncChannelNamespace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppsyncChannelNamespaceOutputProps>(
    AwsAppsyncChannelNamespace,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppsyncChannelNamespaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppsyncChannelNamespaceOutputProps>(
    AwsAppsyncChannelNamespace,
    idFilter,
    baseNode,
    optional,
  )
