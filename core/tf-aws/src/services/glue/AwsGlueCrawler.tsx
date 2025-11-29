import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_crawler

export const InputSchema = z.object({
  database_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  role: resolvableValue(z.string()),
  catalog_target: resolvableValue(
    z.object({
      connection_name: z.string().optional(),
      database_name: z.string(),
      dlq_event_queue_arn: z.string().optional(),
      event_queue_arn: z.string().optional(),
      tables: z.string().array(),
    }).optional(),
  ),
  classifiers: resolvableValue(z.string().array().optional()),
  configuration: resolvableValue(z.string().optional()),
  delta_target: resolvableValue(
    z.object({
      connection_name: z.string().optional(),
      create_native_delta_table: z.boolean().optional(),
      delta_tables: z.string().array(),
      write_manifest: z.boolean(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  dynamodb_target: resolvableValue(
    z.object({
      path: z.string(),
      scan_all: z.boolean().optional(),
      scan_rate: z.number().optional(),
    }).optional(),
  ),
  hudi_target: resolvableValue(
    z.object({
      connection_name: z.string().optional(),
      exclusions: z.string().array().optional(),
      maximum_traversal_depth: z.number(),
      paths: z.string().array(),
    }).optional(),
  ),
  iceberg_target: resolvableValue(
    z.object({
      connection_name: z.string().optional(),
      exclusions: z.string().array().optional(),
      maximum_traversal_depth: z.number(),
      paths: z.string().array(),
    }).optional(),
  ),
  jdbc_target: resolvableValue(
    z.object({
      connection_name: z.string(),
      enable_additional_metadata: z.string().array().optional(),
      exclusions: z.string().array().optional(),
      path: z.string(),
    }).optional(),
  ),
  lake_formation_configuration: resolvableValue(
    z.object({
      account_id: z.string().optional(),
      use_lake_formation_credentials: z.boolean().optional(),
    }).optional(),
  ),
  lineage_configuration: resolvableValue(
    z.object({
      crawler_lineage_settings: z.string().optional(),
    }).optional(),
  ),
  mongodb_target: resolvableValue(
    z.object({
      connection_name: z.string(),
      path: z.string(),
      scan_all: z.boolean().optional(),
    }).optional(),
  ),
  recrawl_policy: resolvableValue(
    z.object({
      recrawl_behavior: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  s3_target: resolvableValue(
    z.object({
      connection_name: z.string().optional(),
      dlq_event_queue_arn: z.string().optional(),
      event_queue_arn: z.string().optional(),
      exclusions: z.string().array().optional(),
      path: z.string(),
      sample_size: z.number().optional(),
    }).optional(),
  ),
  schedule: resolvableValue(z.string().optional()),
  schema_change_policy: resolvableValue(
    z.object({
      delete_behavior: z.string().optional(),
      update_behavior: z.string().optional(),
    }).optional(),
  ),
  security_configuration: resolvableValue(z.string().optional()),
  table_prefix: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGlueCrawler(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_crawler'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueCrawler = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGlueCrawler, node, id)

export const useAwsGlueCrawlers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGlueCrawler, node, id)
