import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/config_configuration_aggregator

export const InputSchema = z.object({
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

export function AwsConfigConfigurationAggregator(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsConfigConfigurationAggregator = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsConfigConfigurationAggregator, node, id)

export const useAwsConfigConfigurationAggregators = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsConfigConfigurationAggregator, node, id)
