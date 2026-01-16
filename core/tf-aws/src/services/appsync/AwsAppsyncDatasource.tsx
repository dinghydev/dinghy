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
  api_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  dynamodb_config: resolvableValue(
    z.object({
      region: z.string().optional(),
      table_name: z.string(),
      use_caller_credentials: z.boolean().optional(),
      versioned: z.boolean().optional(),
      delta_sync_config: z.object({
        base_table_ttl: z.number().optional(),
        delta_sync_table_name: z.string(),
        delta_sync_table_ttl: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  elasticsearch_config: resolvableValue(
    z.object({
      endpoint: z.string(),
      region: z.string().optional(),
    }).optional(),
  ),
  event_bridge_config: resolvableValue(
    z.object({
      event_bus_arn: z.string(),
    }).optional(),
  ),
  http_config: resolvableValue(
    z.object({
      endpoint: z.string(),
      authorization_config: z.object({
        authorization_type: z.string().optional(),
        aws_iam_config: z.object({
          signing_region: z.string().optional(),
          signing_service_name: z.string().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  lambda_config: resolvableValue(
    z.object({
      function_arn: z.string(),
    }).optional(),
  ),
  opensearchservice_config: resolvableValue(
    z.object({
      endpoint: z.string(),
      region: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  relational_database_config: resolvableValue(
    z.object({
      source_type: z.string().optional(),
      http_endpoint_config: z.object({
        aws_secret_store_arn: z.string(),
        database_name: z.string().optional(),
        db_cluster_identifier: z.string(),
        region: z.string().optional(),
        schema: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  service_role_arn: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/appsync_datasource

export function AwsAppsyncDatasource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_datasource'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncDatasource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsAppsyncDatasource, idFilter, baseNode, optional)

export const useAwsAppsyncDatasources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsAppsyncDatasource, idFilter, baseNode, optional)
