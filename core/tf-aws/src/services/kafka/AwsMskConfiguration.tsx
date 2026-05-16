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

export const AwsMskConfigurationInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  server_properties: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kafka_versions: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsMskConfigurationOutputSchema = z.object({
  arn: z.string().optional(),
  latest_revision: z.number().optional(),
})

export type AwsMskConfigurationInputProps =
  & z.input<typeof AwsMskConfigurationInputSchema>
  & NodeProps

export type AwsMskConfigurationOutputProps =
  & z.output<typeof AwsMskConfigurationOutputSchema>
  & z.output<typeof AwsMskConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/msk_configuration

export function AwsMskConfiguration(
  props: Partial<AwsMskConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMskConfigurationInputSchema}
      _outputSchema={AwsMskConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsMskConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMskConfigurationOutputProps>(
    AwsMskConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMskConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMskConfigurationOutputProps>(
    AwsMskConfiguration,
    idFilter,
    baseNode,
    optional,
  )
