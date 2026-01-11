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

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  scrape_configuration: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  role_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/prometheus_scraper

export function AwsPrometheusScraper(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_prometheus_scraper'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsPrometheusScraper = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsPrometheusScraper, idFilter, baseNode, optional)

export const useAwsPrometheusScrapers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsPrometheusScraper, idFilter, baseNode, optional)
