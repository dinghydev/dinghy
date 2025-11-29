import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/prometheus_default_scraper_configuration

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  configuration: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsPrometheusDefaultScraperConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prometheus_default_scraper_configuration'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsPrometheusDefaultScraperConfiguration = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    DataAwsPrometheusDefaultScraperConfiguration,
    node,
    id,
  )

export const useDataAwsPrometheusDefaultScraperConfigurations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    DataAwsPrometheusDefaultScraperConfiguration,
    node,
    id,
  )
