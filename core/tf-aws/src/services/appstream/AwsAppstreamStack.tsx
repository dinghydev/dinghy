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
  name: resolvableValue(z.string()),
  access_endpoints: resolvableValue(
    z.object({
      endpoint_type: z.string(),
      vpce_id: z.string().optional(),
    }).array().optional(),
  ),
  application_settings: resolvableValue(
    z.object({
      enabled: z.boolean(),
      settings_group: z.string().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  display_name: resolvableValue(z.string().optional()),
  embed_host_domains: resolvableValue(z.string().array().optional()),
  feedback_url: resolvableValue(z.string().optional()),
  redirect_url: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  storage_connectors: resolvableValue(
    z.object({
      connector_type: z.string(),
      domains: z.string().array().optional(),
      resource_identifier: z.string().optional(),
    }).array().optional(),
  ),
  streaming_experience_settings: resolvableValue(
    z.object({
      preferred_protocol: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  user_settings: resolvableValue(
    z.object({
      action: z.string(),
      permission: z.string(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appstream_stack

export function AwsAppstreamStack(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appstream_stack'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppstreamStack = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsAppstreamStack, idFilter, baseNode, optional)

export const useAwsAppstreamStacks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsAppstreamStack, idFilter, baseNode, optional)
