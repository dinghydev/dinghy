import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMskconnectCustomPlugin } from './AwsMskconnectCustomPlugin.tsx'

export const DataAwsMskconnectCustomPluginInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMskconnectCustomPluginOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  latest_revision: z.number().optional(),
  state: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsMskconnectCustomPluginInputProps =
  & z.input<typeof DataAwsMskconnectCustomPluginInputSchema>
  & NodeProps

export type DataAwsMskconnectCustomPluginOutputProps =
  & z.output<typeof DataAwsMskconnectCustomPluginOutputSchema>
  & z.output<typeof DataAwsMskconnectCustomPluginInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/mskconnect_custom_plugin

export function DataAwsMskconnectCustomPlugin(
  props: Partial<DataAwsMskconnectCustomPluginInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsMskconnectCustomPlugin
      _type='aws_mskconnect_custom_plugin'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMskconnectCustomPluginInputSchema}
      _outputSchema={DataAwsMskconnectCustomPluginOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMskconnectCustomPlugin = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsMskconnectCustomPluginOutputProps>(
    DataAwsMskconnectCustomPlugin,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsMskconnectCustomPlugins = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMskconnectCustomPluginOutputProps>(
    DataAwsMskconnectCustomPlugin,
    idFilter,
    baseNode,
    optional,
  )
