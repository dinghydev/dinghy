import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMskconnectWorkerConfiguration } from './AwsMskconnectWorkerConfiguration.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/mskconnect_worker_configuration

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  latest_revision: z.number().optional(),
  properties_file_content: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsMskconnectWorkerConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsMskconnectWorkerConfiguration
      _type='aws_mskconnect_worker_configuration'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMskconnectWorkerConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsMskconnectWorkerConfiguration, node, id)

export const useDataAwsMskconnectWorkerConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsMskconnectWorkerConfiguration, node, id)
