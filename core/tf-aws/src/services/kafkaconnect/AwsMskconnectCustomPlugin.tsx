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

export const AwsMskconnectCustomPluginInputSchema = TfMetaSchema.extend({
  content_type: resolvableValue(z.string()),
  location: resolvableValue(z.object({
    s3: z.object({
      bucket_arn: z.string(),
      file_key: z.string(),
      object_version: z.string().optional(),
    }),
  })),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsMskconnectCustomPluginOutputSchema = z.object({
  arn: z.string().optional(),
  latest_revision: z.number().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsMskconnectCustomPluginInputProps =
  & z.input<typeof AwsMskconnectCustomPluginInputSchema>
  & NodeProps

export type AwsMskconnectCustomPluginOutputProps =
  & z.output<typeof AwsMskconnectCustomPluginOutputSchema>
  & z.output<typeof AwsMskconnectCustomPluginInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/mskconnect_custom_plugin

export function AwsMskconnectCustomPlugin(
  props: Partial<AwsMskconnectCustomPluginInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_mskconnect_custom_plugin'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMskconnectCustomPluginInputSchema}
      _outputSchema={AwsMskconnectCustomPluginOutputSchema}
      {...props}
    />
  )
}

export const useAwsMskconnectCustomPlugin = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMskconnectCustomPluginOutputProps>(
    AwsMskconnectCustomPlugin,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMskconnectCustomPlugins = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMskconnectCustomPluginOutputProps>(
    AwsMskconnectCustomPlugin,
    idFilter,
    baseNode,
    optional,
  )
