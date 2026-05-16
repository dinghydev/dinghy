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

export const AwsCloudwatchEventConnectionInputSchema = TfMetaSchema.extend({
  auth_parameters: resolvableValue(z.object({
    api_key: z.object({
      key: z.string(),
      value: z.string(),
    }).optional(),
    basic: z.object({
      password: z.string(),
      username: z.string(),
    }).optional(),
    connectivity_parameters: z.object({
      resource_parameters: z.object({
        resource_association_arn: z.string().optional(),
        resource_configuration_arn: z.string(),
      }),
    }).optional(),
    invocation_http_parameters: z.object({
      body: z.object({
        is_value_secret: z.boolean().optional(),
        key: z.string().optional(),
        value: z.string().optional(),
      }).array().optional(),
      header: z.object({
        is_value_secret: z.boolean().optional(),
        key: z.string().optional(),
        value: z.string().optional(),
      }).array().optional(),
      query_string: z.object({
        is_value_secret: z.boolean().optional(),
        key: z.string().optional(),
        value: z.string().optional(),
      }).array().optional(),
    }).optional(),
    oauth: z.object({
      authorization_endpoint: z.string(),
      http_method: z.string(),
      client_parameters: z.object({
        client_id: z.string(),
        client_secret: z.string(),
      }).optional(),
      oauth_http_parameters: z.object({
        body: z.object({
          is_value_secret: z.boolean().optional(),
          key: z.string().optional(),
          value: z.string().optional(),
        }).array().optional(),
        header: z.object({
          is_value_secret: z.boolean().optional(),
          key: z.string().optional(),
          value: z.string().optional(),
        }).array().optional(),
        query_string: z.object({
          is_value_secret: z.boolean().optional(),
          key: z.string().optional(),
          value: z.string().optional(),
        }).array().optional(),
      }),
    }).optional(),
  })),
  authorization_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  invocation_connectivity_parameters: resolvableValue(
    z.object({
      resource_parameters: z.object({
        resource_association_arn: z.string().optional(),
        resource_configuration_arn: z.string(),
      }),
    }).optional(),
  ),
  kms_key_identifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsCloudwatchEventConnectionOutputSchema = z.object({
  arn: z.string().optional(),
  secret_arn: z.string().optional(),
})

export type AwsCloudwatchEventConnectionInputProps =
  & z.input<typeof AwsCloudwatchEventConnectionInputSchema>
  & NodeProps

export type AwsCloudwatchEventConnectionOutputProps =
  & z.output<typeof AwsCloudwatchEventConnectionOutputSchema>
  & z.output<typeof AwsCloudwatchEventConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_event_connection

export function AwsCloudwatchEventConnection(
  props: Partial<AwsCloudwatchEventConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_event_connection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchEventConnectionInputSchema}
      _outputSchema={AwsCloudwatchEventConnectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchEventConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchEventConnectionOutputProps>(
    AwsCloudwatchEventConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchEventConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchEventConnectionOutputProps>(
    AwsCloudwatchEventConnection,
    idFilter,
    baseNode,
    optional,
  )
