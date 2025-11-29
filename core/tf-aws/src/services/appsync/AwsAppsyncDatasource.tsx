import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appsync_datasource

export const InputSchema = z.object({
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

export function AwsAppsyncDatasource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsAppsyncDatasource = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppsyncDatasource, node, id)

export const useAwsAppsyncDatasources = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppsyncDatasource, node, id)
