import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMskconnectCustomPlugin } from './AwsMskconnectCustomPlugin.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/mskconnect_custom_plugin

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  latest_revision: z.number().optional(),
  state: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsMskconnectCustomPlugin(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsMskconnectCustomPlugin
      _type='aws_mskconnect_custom_plugin'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMskconnectCustomPlugin = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsMskconnectCustomPlugin, node, id)

export const useDataAwsMskconnectCustomPlugins = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsMskconnectCustomPlugin, node, id)
