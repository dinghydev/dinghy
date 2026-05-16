import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMskConfiguration } from './AwsMskConfiguration.tsx'

export const DataAwsMskConfigurationInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMskConfigurationOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  kafka_versions: z.set(z.string()).optional(),
  latest_revision: z.number().optional(),
  server_properties: z.string().optional(),
})

export type DataAwsMskConfigurationInputProps =
  & z.input<typeof DataAwsMskConfigurationInputSchema>
  & NodeProps

export type DataAwsMskConfigurationOutputProps =
  & z.output<typeof DataAwsMskConfigurationOutputSchema>
  & z.output<typeof DataAwsMskConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/msk_configuration

export function DataAwsMskConfiguration(
  props: Partial<DataAwsMskConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsMskConfiguration
      _type='aws_msk_configuration'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMskConfigurationInputSchema}
      _outputSchema={DataAwsMskConfigurationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMskConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsMskConfigurationOutputProps>(
    DataAwsMskConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsMskConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMskConfigurationOutputProps>(
    DataAwsMskConfiguration,
    idFilter,
    baseNode,
    optional,
  )
