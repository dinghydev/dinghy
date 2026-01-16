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

export const InputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  account_aggregation_source: resolvableValue(
    z.object({
      account_ids: z.string().array(),
      all_regions: z.boolean().optional(),
      regions: z.string().array().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  organization_aggregation_source: resolvableValue(
    z.object({
      all_regions: z.boolean().optional(),
      regions: z.string().array().optional(),
      role_arn: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/config_configuration_aggregator

export function AwsConfigConfigurationAggregator(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_configuration_aggregator'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConfigConfigurationAggregator = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsConfigConfigurationAggregator,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConfigConfigurationAggregators = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsConfigConfigurationAggregator,
    idFilter,
    baseNode,
    optional,
  )
