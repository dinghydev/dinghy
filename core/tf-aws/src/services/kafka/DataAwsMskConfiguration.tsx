import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMskConfiguration } from './AwsMskConfiguration.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/msk_configuration

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  kafka_versions: z.string().array().optional(),
  latest_revision: z.number().optional(),
  server_properties: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsMskConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsMskConfiguration
      _type='aws_msk_configuration'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMskConfiguration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsMskConfiguration, node, id)

export const useDataAwsMskConfigurations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsMskConfiguration, node, id)
