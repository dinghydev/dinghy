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
  gateway_identifier: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  credential_provider_configuration: resolvableValue(
    z.object({
      api_key: z.object({
        credential_location: z.string().optional(),
        credential_parameter_name: z.string().optional(),
        credential_prefix: z.string().optional(),
        provider_arn: z.string(),
      }).array().optional(),
      gateway_iam_role: z.object({}).array().optional(),
      oauth: z.object({
        custom_parameters: z.record(z.string(), z.string()).optional(),
        provider_arn: z.string(),
        scopes: z.string().array(),
      }).array().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  target_configuration: resolvableValue(
    z.object({
      mcp: z.object({
        lambda: z.object({
          lambda_arn: z.string(),
          tool_schema: z.object({
            inline_payload: z.object({
              description: z.string(),
              name: z.string(),
              input_schema: z.object({
                description: z.string().optional(),
                type: z.string(),
                items: z.object({
                  description: z.string().optional(),
                  type: z.string(),
                  items: z.object({
                    description: z.string().optional(),
                    items_json: z.string().optional(),
                    properties_json: z.string().optional(),
                    type: z.string(),
                  }).array().optional(),
                  property: z.object({
                    description: z.string().optional(),
                    items_json: z.string().optional(),
                    name: z.string(),
                    properties_json: z.string().optional(),
                    required: z.boolean().optional(),
                    type: z.string(),
                  }).array().optional(),
                }).array().optional(),
                property: z.object({
                  description: z.string().optional(),
                  name: z.string(),
                  required: z.boolean().optional(),
                  type: z.string(),
                  items: z.object({
                    description: z.string().optional(),
                    type: z.string(),
                    items: z.object({
                      description: z.string().optional(),
                      items_json: z.string().optional(),
                      properties_json: z.string().optional(),
                      type: z.string(),
                    }).array().optional(),
                    property: z.object({
                      description: z.string().optional(),
                      items_json: z.string().optional(),
                      name: z.string(),
                      properties_json: z.string().optional(),
                      required: z.boolean().optional(),
                      type: z.string(),
                    }).array().optional(),
                  }).array().optional(),
                  property: z.object({
                    description: z.string().optional(),
                    items_json: z.string().optional(),
                    name: z.string(),
                    properties_json: z.string().optional(),
                    required: z.boolean().optional(),
                    type: z.string(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              output_schema: z.object({
                description: z.string().optional(),
                type: z.string(),
                items: z.object({
                  description: z.string().optional(),
                  type: z.string(),
                  items: z.object({
                    description: z.string().optional(),
                    items_json: z.string().optional(),
                    properties_json: z.string().optional(),
                    type: z.string(),
                  }).array().optional(),
                  property: z.object({
                    description: z.string().optional(),
                    items_json: z.string().optional(),
                    name: z.string(),
                    properties_json: z.string().optional(),
                    required: z.boolean().optional(),
                    type: z.string(),
                  }).array().optional(),
                }).array().optional(),
                property: z.object({
                  description: z.string().optional(),
                  name: z.string(),
                  required: z.boolean().optional(),
                  type: z.string(),
                  items: z.object({
                    description: z.string().optional(),
                    type: z.string(),
                    items: z.object({
                      description: z.string().optional(),
                      items_json: z.string().optional(),
                      properties_json: z.string().optional(),
                      type: z.string(),
                    }).array().optional(),
                    property: z.object({
                      description: z.string().optional(),
                      items_json: z.string().optional(),
                      name: z.string(),
                      properties_json: z.string().optional(),
                      required: z.boolean().optional(),
                      type: z.string(),
                    }).array().optional(),
                  }).array().optional(),
                  property: z.object({
                    description: z.string().optional(),
                    items_json: z.string().optional(),
                    name: z.string(),
                    properties_json: z.string().optional(),
                    required: z.boolean().optional(),
                    type: z.string(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
            s3: z.object({
              bucket_owner_account_id: z.string().optional(),
              uri: z.string().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        mcp_server: z.object({
          endpoint: z.string(),
        }).array().optional(),
        open_api_schema: z.object({
          inline_payload: z.object({
            payload: z.string(),
          }).array().optional(),
          s3: z.object({
            bucket_owner_account_id: z.string().optional(),
            uri: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
        smithy_model: z.object({
          inline_payload: z.object({
            payload: z.string(),
          }).array().optional(),
          s3: z.object({
            bucket_owner_account_id: z.string().optional(),
            uri: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  target_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrockagentcore_gateway_target

export function AwsBedrockagentcoreGatewayTarget(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_gateway_target'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreGatewayTarget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsBedrockagentcoreGatewayTarget,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentcoreGatewayTargets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockagentcoreGatewayTarget,
    idFilter,
    baseNode,
    optional,
  )
