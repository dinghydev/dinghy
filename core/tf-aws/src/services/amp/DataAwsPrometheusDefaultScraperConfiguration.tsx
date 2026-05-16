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

export const DataAwsPrometheusDefaultScraperConfigurationInputSchema =
  TfMetaSchema.extend({
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsPrometheusDefaultScraperConfigurationOutputSchema = z
  .object({
    configuration: z.string().optional(),
  })

export type DataAwsPrometheusDefaultScraperConfigurationInputProps =
  & z.input<typeof DataAwsPrometheusDefaultScraperConfigurationInputSchema>
  & NodeProps

export type DataAwsPrometheusDefaultScraperConfigurationOutputProps =
  & z.output<typeof DataAwsPrometheusDefaultScraperConfigurationOutputSchema>
  & z.output<typeof DataAwsPrometheusDefaultScraperConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/prometheus_default_scraper_configuration

export function DataAwsPrometheusDefaultScraperConfiguration(
  props: Partial<DataAwsPrometheusDefaultScraperConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prometheus_default_scraper_configuration'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsPrometheusDefaultScraperConfigurationInputSchema}
      _outputSchema={DataAwsPrometheusDefaultScraperConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsPrometheusDefaultScraperConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsPrometheusDefaultScraperConfigurationOutputProps>(
    DataAwsPrometheusDefaultScraperConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsPrometheusDefaultScraperConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsPrometheusDefaultScraperConfigurationOutputProps>(
    DataAwsPrometheusDefaultScraperConfiguration,
    idFilter,
    baseNode,
    optional,
  )
