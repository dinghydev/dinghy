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
  execution_role_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  customer_encryption_key_arn: resolvableValue(z.string().optional()),
  definition: resolvableValue(
    z.object({
      connection: z.object({
        name: z.string(),
        source: z.string(),
        target: z.string(),
        type: z.string(),
        configuration: z.object({
          conditional: z.object({
            condition: z.string(),
          }).array().optional(),
          data: z.object({
            source_output: z.string(),
            target_input: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      node: z.object({
        name: z.string(),
        type: z.string(),
        configuration: z.object({
          agent: z.object({
            agent_alias_arn: z.string(),
          }).array().optional(),
          collector: z.object({}).array().optional(),
          condition: z.object({
            condition: z.object({
              expression: z.string().optional(),
              name: z.string(),
            }).array().optional(),
          }).array().optional(),
          inline_code: z.object({
            code: z.string(),
            language: z.string(),
          }).array().optional(),
          input: z.object({}).array().optional(),
          iterator: z.object({}).array().optional(),
          knowledge_base: z.object({
            knowledge_base_id: z.string(),
            model_id: z.string(),
            number_of_results: z.number().optional(),
            guardrail_configuration: z.object({
              guardrail_identifier: z.string(),
              guardrail_version: z.string(),
            }).array().optional(),
            inference_configuration: z.object({
              text: z.object({
                max_tokens: z.number().optional(),
                stop_sequences: z.string().array().optional(),
                temperature: z.number().optional(),
                top_p: z.number().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          lambda_function: z.object({
            lambda_arn: z.string(),
          }).array().optional(),
          lex: z.object({
            bot_alias_arn: z.string(),
            locale_id: z.string(),
          }).array().optional(),
          output: z.object({}).array().optional(),
          prompt: z.object({
            guardrail_configuration: z.object({
              guardrail_identifier: z.string(),
              guardrail_version: z.string(),
            }).array().optional(),
            source_configuration: z.object({
              inline: z.object({
                additional_model_request_fields: z.string().optional(),
                model_id: z.string(),
                template_type: z.string(),
                inference_configuration: z.object({
                  text: z.object({
                    max_tokens: z.number().optional(),
                    stop_sequences: z.string().array().optional(),
                    temperature: z.number().optional(),
                    top_p: z.number().optional(),
                  }).array().optional(),
                }).array().optional(),
                template_configuration: z.object({
                  chat: z.object({
                    input_variable: z.object({
                      name: z.string(),
                    }).array().optional(),
                    message: z.object({
                      role: z.string(),
                      content: z.object({
                        text: z.string().optional(),
                        cache_point: z.object({
                          type: z.string(),
                        }).array().optional(),
                      }).array().optional(),
                    }).array().optional(),
                    system: z.object({
                      text: z.string().optional(),
                      cache_point: z.object({
                        type: z.string(),
                      }).array().optional(),
                    }).array().optional(),
                    tool_configuration: z.object({
                      tool: z.object({
                        cache_point: z.object({
                          type: z.string(),
                        }).array().optional(),
                        tool_spec: z.object({
                          description: z.string().optional(),
                          name: z.string(),
                          input_schema: z.object({
                            json: z.string().optional(),
                          }).array().optional(),
                        }).array().optional(),
                      }).array().optional(),
                      tool_choice: z.object({
                        any: z.object({}).array().optional(),
                        auto: z.object({}).array().optional(),
                        tool: z.object({
                          name: z.string(),
                        }).array().optional(),
                      }).array().optional(),
                    }).array().optional(),
                  }).array().optional(),
                  text: z.object({
                    text: z.string(),
                    cache_point: z.object({
                      type: z.string(),
                    }).array().optional(),
                    input_variable: z.object({
                      name: z.string(),
                    }).array().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              resource: z.object({
                prompt_arn: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          retrieval: z.object({
            service_configuration: z.object({
              s3: z.object({
                bucket_name: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          storage: z.object({
            service_configuration: z.object({
              s3: z.object({
                bucket_name: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        input: z.object({
          category: z.string().optional(),
          expression: z.string(),
          name: z.string(),
          type: z.string(),
        }).array().optional(),
        output: z.object({
          name: z.string(),
          type: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
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
  created_at: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagent_flow

export function AwsBedrockagentFlow(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_flow'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentFlow = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsBedrockagentFlow, idFilter, baseNode)

export const useAwsBedrockagentFlows = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsBedrockagentFlow, idFilter, baseNode)
