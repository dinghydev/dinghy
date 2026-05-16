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

export const AwsConfigConfigurationAggregatorInputSchema = TfMetaSchema.extend({
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

export const AwsConfigConfigurationAggregatorOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsConfigConfigurationAggregatorImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsConfigConfigurationAggregatorInputProps =
  & z.input<typeof AwsConfigConfigurationAggregatorInputSchema>
  & z.input<typeof AwsConfigConfigurationAggregatorImportSchema>
  & NodeProps

export type AwsConfigConfigurationAggregatorOutputProps =
  & z.output<typeof AwsConfigConfigurationAggregatorOutputSchema>
  & z.output<typeof AwsConfigConfigurationAggregatorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/config_configuration_aggregator

export function AwsConfigConfigurationAggregator(
  props: Partial<AwsConfigConfigurationAggregatorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_configuration_aggregator'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConfigConfigurationAggregatorInputSchema}
      _outputSchema={AwsConfigConfigurationAggregatorOutputSchema}
      _importSchema={AwsConfigConfigurationAggregatorImportSchema}
      {...props}
    />
  )
}

export const useAwsConfigConfigurationAggregator = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConfigConfigurationAggregatorOutputProps>(
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
  useTypedNodes<AwsConfigConfigurationAggregatorOutputProps>(
    AwsConfigConfigurationAggregator,
    idFilter,
    baseNode,
    optional,
  )
