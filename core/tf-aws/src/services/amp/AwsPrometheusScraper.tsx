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

export const AwsPrometheusScraperInputSchema = TfMetaSchema.extend({
  scrape_configuration: resolvableValue(z.string()),
  alias: resolvableValue(z.string().optional()),
  destination: resolvableValue(
    z.object({
      amp: z.object({
        workspace_arn: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  role_configuration: resolvableValue(
    z.object({
      source_role_arn: z.string().optional(),
      target_role_arn: z.string().optional(),
    }).array().optional(),
  ),
  source: resolvableValue(
    z.object({
      eks: z.object({
        cluster_arn: z.string(),
        security_group_ids: z.string().array().optional(),
        subnet_ids: z.string().array(),
      }).array().optional(),
      vpc: z.object({
        security_group_ids: z.string().array(),
        subnet_ids: z.string().array(),
      }).array().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsPrometheusScraperOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  role_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsPrometheusScraperInputProps =
  & z.input<typeof AwsPrometheusScraperInputSchema>
  & NodeProps

export type AwsPrometheusScraperOutputProps =
  & z.output<typeof AwsPrometheusScraperOutputSchema>
  & z.output<typeof AwsPrometheusScraperInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/prometheus_scraper

export function AwsPrometheusScraper(
  props: Partial<AwsPrometheusScraperInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prometheus_scraper'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPrometheusScraperInputSchema}
      _outputSchema={AwsPrometheusScraperOutputSchema}
      {...props}
    />
  )
}

export const useAwsPrometheusScraper = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPrometheusScraperOutputProps>(
    AwsPrometheusScraper,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPrometheusScrapers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPrometheusScraperOutputProps>(
    AwsPrometheusScraper,
    idFilter,
    baseNode,
    optional,
  )
