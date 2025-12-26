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
  data_source_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  parameters: resolvableValue(z.object({
    amazon_elasticsearch: z.object({
      domain: z.string(),
    }).optional(),
    athena: z.object({
      work_group: z.string().optional(),
    }).optional(),
    aurora: z.object({
      database: z.string(),
      host: z.string(),
      port: z.number(),
    }).optional(),
    aurora_postgresql: z.object({
      database: z.string(),
      host: z.string(),
      port: z.number(),
    }).optional(),
    aws_iot_analytics: z.object({
      data_set_name: z.string(),
    }).optional(),
    databricks: z.object({
      host: z.string(),
      port: z.number(),
      sql_endpoint_path: z.string(),
    }).optional(),
    jira: z.object({
      site_base_url: z.string(),
    }).optional(),
    maria_db: z.object({
      database: z.string(),
      host: z.string(),
      port: z.number(),
    }).optional(),
    mysql: z.object({
      database: z.string(),
      host: z.string(),
      port: z.number(),
    }).optional(),
    oracle: z.object({
      database: z.string(),
      host: z.string(),
      port: z.number(),
    }).optional(),
    postgresql: z.object({
      database: z.string(),
      host: z.string(),
      port: z.number(),
    }).optional(),
    presto: z.object({
      catalog: z.string(),
      host: z.string(),
      port: z.number(),
    }).optional(),
    rds: z.object({
      database: z.string(),
      instance_id: z.string(),
    }).optional(),
    redshift: z.object({
      cluster_id: z.string().optional(),
      database: z.string(),
      host: z.string().optional(),
      port: z.number().optional(),
    }).optional(),
    s3: z.object({
      role_arn: z.string().optional(),
      manifest_file_location: z.object({
        bucket: z.string(),
        key: z.string(),
      }),
    }).optional(),
    service_now: z.object({
      site_base_url: z.string(),
    }).optional(),
    snowflake: z.object({
      database: z.string(),
      host: z.string(),
      warehouse: z.string(),
    }).optional(),
    spark: z.object({
      host: z.string(),
      port: z.number(),
    }).optional(),
    sql_server: z.object({
      database: z.string(),
      host: z.string(),
      port: z.number(),
    }).optional(),
    teradata: z.object({
      database: z.string(),
      host: z.string(),
      port: z.number(),
    }).optional(),
    twitter: z.object({
      max_rows: z.number(),
      query: z.string(),
    }).optional(),
  })),
  type: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  credentials: resolvableValue(
    z.object({
      copy_source_arn: z.string().optional(),
      secret_arn: z.string().optional(),
      credential_pair: z.object({
        password: z.string(),
        username: z.string(),
      }).optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  permission: resolvableValue(
    z.object({
      actions: z.string().array(),
      principal: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  ssl_properties: resolvableValue(
    z.object({
      disable_ssl: z.boolean(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_connection_properties: resolvableValue(
    z.object({
      vpc_connection_arn: z.string(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/quicksight_data_source

export function AwsQuicksightDataSource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_data_source'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightDataSource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsQuicksightDataSource,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightDataSources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsQuicksightDataSource,
    idFilter,
    baseNode,
    optional,
  )
