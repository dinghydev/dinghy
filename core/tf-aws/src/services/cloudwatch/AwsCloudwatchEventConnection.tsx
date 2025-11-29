import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudwatch_event_connection

export const InputSchema = z.object({
  authorization_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  auth_parameters: resolvableValue(z.object({
    api_key: z.object({
      key: z.string(),
      value: z.string(),
    }).optional(),
    basic: z.object({
      password: z.string(),
      username: z.string(),
    }).optional(),
    invocation_http_parameters: z.object({
      body: z.object({
        is_value_secret: z.boolean().optional(),
        key: z.string().optional(),
        value: z.string().optional(),
      }).optional(),
      header: z.object({
        is_value_secret: z.boolean().optional(),
        key: z.string().optional(),
        value: z.string().optional(),
      }).optional(),
      query_string: z.object({
        is_value_secret: z.boolean().optional(),
        key: z.string().optional(),
        value: z.string().optional(),
      }).optional(),
    }).optional(),
    oauth: z.object({
      authorization_endpoint: z.string(),
      http_method: z.string(),
    }).optional(),
  })),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  invocation_connectivity_parameters: resolvableValue(
    z.object({
      resource_parameters: z.object({
        resource_association_arn: z.string(),
        resource_configuration_arn: z.string(),
      }),
    }).optional(),
  ),
  kms_key_identifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  secret_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudwatchEventConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_event_connection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchEventConnection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudwatchEventConnection, node, id)

export const useAwsCloudwatchEventConnections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudwatchEventConnection, node, id)
