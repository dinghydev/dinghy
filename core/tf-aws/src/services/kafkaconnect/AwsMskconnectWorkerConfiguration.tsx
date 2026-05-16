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

export const AwsMskconnectWorkerConfigurationInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  properties_file_content: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsMskconnectWorkerConfigurationOutputSchema = z.object({
  arn: z.string().optional(),
  latest_revision: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsMskconnectWorkerConfigurationInputProps =
  & z.input<typeof AwsMskconnectWorkerConfigurationInputSchema>
  & NodeProps

export type AwsMskconnectWorkerConfigurationOutputProps =
  & z.output<typeof AwsMskconnectWorkerConfigurationOutputSchema>
  & z.output<typeof AwsMskconnectWorkerConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/mskconnect_worker_configuration

export function AwsMskconnectWorkerConfiguration(
  props: Partial<AwsMskconnectWorkerConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_mskconnect_worker_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMskconnectWorkerConfigurationInputSchema}
      _outputSchema={AwsMskconnectWorkerConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsMskconnectWorkerConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMskconnectWorkerConfigurationOutputProps>(
    AwsMskconnectWorkerConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMskconnectWorkerConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMskconnectWorkerConfigurationOutputProps>(
    AwsMskconnectWorkerConfiguration,
    idFilter,
    baseNode,
    optional,
  )
