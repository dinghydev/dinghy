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
  bot_id: resolvableValue(z.string()),
  bot_version: resolvableValue(z.string()),
  intent_id: resolvableValue(z.string()),
  locale_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  multiple_values_setting: resolvableValue(
    z.object({
      allow_multiple_values: z.boolean().optional(),
    }).array().optional(),
  ),
  obfuscation_setting: resolvableValue(
    z.object({
      obfuscation_setting_type: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  slot_type_id: resolvableValue(z.string().optional()),
  sub_slot_setting: resolvableValue(
    z.object({
      expression: z.string().optional(),
      slot_specification: z.object({
        map_block_key: z.string(),
        slot_type_id: z.string(),
        value_elicitation_setting: z.object({
          default_value_specification: z.object({
            default_value_list: z.object({
              default_value: z.string(),
            }).array().optional(),
          }).array().optional(),
          prompt_specification: z.object({
            allow_interrupt: z.boolean().optional(),
            max_retries: z.number(),
            message_selection_strategy: z.string().optional(),
            message_group: z.object({
              message: z.object({
                custom_payload: z.object({
                  value: z.string(),
                }).array().optional(),
                image_response_card: z.object({
                  image_url: z.string().optional(),
                  subtitle: z.string().optional(),
                  title: z.string(),
                  button: z.object({
                    text: z.string(),
                    value: z.string(),
                  }).array().optional(),
                }).array().optional(),
                plain_text_message: z.object({
                  value: z.string(),
                }).array().optional(),
                ssml_message: z.object({
                  value: z.string(),
                }).array().optional(),
              }).array().optional(),
              variation: z.object({
                custom_payload: z.object({
                  value: z.string(),
                }).array().optional(),
                image_response_card: z.object({
                  image_url: z.string().optional(),
                  subtitle: z.string().optional(),
                  title: z.string(),
                  button: z.object({
                    text: z.string(),
                    value: z.string(),
                  }).array().optional(),
                }).array().optional(),
                plain_text_message: z.object({
                  value: z.string(),
                }).array().optional(),
                ssml_message: z.object({
                  value: z.string(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
            prompt_attempts_specification: z.object({
              allow_interrupt: z.boolean().optional(),
              map_block_key: z.string(),
              allowed_input_types: z.object({
                allow_audio_input: z.boolean(),
                allow_dtmf_input: z.boolean(),
              }).array().optional(),
              audio_and_dtmf_input_specification: z.object({
                start_timeout_ms: z.number(),
                audio_specification: z.object({
                  end_timeout_ms: z.number(),
                  max_length_ms: z.number(),
                }).array().optional(),
                dtmf_specification: z.object({
                  deletion_character: z.string(),
                  end_character: z.string(),
                  end_timeout_ms: z.number(),
                  max_length: z.number(),
                }).array().optional(),
              }).array().optional(),
              text_input_specification: z.object({
                start_timeout_ms: z.number(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          sample_utterance: z.object({
            utterance: z.string(),
          }).array().optional(),
          wait_and_continue_specification: z.object({
            active: z.boolean().optional(),
            continue_response: z.object({
              allow_interrupt: z.boolean().optional(),
              message_group: z.object({
                message: z.object({
                  custom_payload: z.object({
                    value: z.string(),
                  }).array().optional(),
                  image_response_card: z.object({
                    image_url: z.string().optional(),
                    subtitle: z.string().optional(),
                    title: z.string(),
                    button: z.object({
                      text: z.string(),
                      value: z.string(),
                    }).array().optional(),
                  }).array().optional(),
                  plain_text_message: z.object({
                    value: z.string(),
                  }).array().optional(),
                  ssml_message: z.object({
                    value: z.string(),
                  }).array().optional(),
                }).array().optional(),
                variation: z.object({
                  custom_payload: z.object({
                    value: z.string(),
                  }).array().optional(),
                  image_response_card: z.object({
                    image_url: z.string().optional(),
                    subtitle: z.string().optional(),
                    title: z.string(),
                    button: z.object({
                      text: z.string(),
                      value: z.string(),
                    }).array().optional(),
                  }).array().optional(),
                  plain_text_message: z.object({
                    value: z.string(),
                  }).array().optional(),
                  ssml_message: z.object({
                    value: z.string(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
            still_waiting_response: z.object({
              allow_interrupt: z.boolean().optional(),
              frequency_in_seconds: z.number(),
              timeout_in_seconds: z.number(),
              message_group: z.object({
                message: z.object({
                  custom_payload: z.object({
                    value: z.string(),
                  }).array().optional(),
                  image_response_card: z.object({
                    image_url: z.string().optional(),
                    subtitle: z.string().optional(),
                    title: z.string(),
                    button: z.object({
                      text: z.string(),
                      value: z.string(),
                    }).array().optional(),
                  }).array().optional(),
                  plain_text_message: z.object({
                    value: z.string(),
                  }).array().optional(),
                  ssml_message: z.object({
                    value: z.string(),
                  }).array().optional(),
                }).array().optional(),
                variation: z.object({
                  custom_payload: z.object({
                    value: z.string(),
                  }).array().optional(),
                  image_response_card: z.object({
                    image_url: z.string().optional(),
                    subtitle: z.string().optional(),
                    title: z.string(),
                    button: z.object({
                      text: z.string(),
                      value: z.string(),
                    }).array().optional(),
                  }).array().optional(),
                  plain_text_message: z.object({
                    value: z.string(),
                  }).array().optional(),
                  ssml_message: z.object({
                    value: z.string(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
            waiting_response: z.object({
              allow_interrupt: z.boolean().optional(),
              message_group: z.object({
                message: z.object({
                  custom_payload: z.object({
                    value: z.string(),
                  }).array().optional(),
                  image_response_card: z.object({
                    image_url: z.string().optional(),
                    subtitle: z.string().optional(),
                    title: z.string(),
                    button: z.object({
                      text: z.string(),
                      value: z.string(),
                    }).array().optional(),
                  }).array().optional(),
                  plain_text_message: z.object({
                    value: z.string(),
                  }).array().optional(),
                  ssml_message: z.object({
                    value: z.string(),
                  }).array().optional(),
                }).array().optional(),
                variation: z.object({
                  custom_payload: z.object({
                    value: z.string(),
                  }).array().optional(),
                  image_response_card: z.object({
                    image_url: z.string().optional(),
                    subtitle: z.string().optional(),
                    title: z.string(),
                    button: z.object({
                      text: z.string(),
                      value: z.string(),
                    }).array().optional(),
                  }).array().optional(),
                  plain_text_message: z.object({
                    value: z.string(),
                  }).array().optional(),
                  ssml_message: z.object({
                    value: z.string(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
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
  value_elicitation_setting: resolvableValue(
    z.object({
      slot_constraint: z.string(),
      default_value_specification: z.object({
        default_value_list: z.object({
          default_value: z.string(),
        }).array().optional(),
      }).array().optional(),
      prompt_specification: z.object({
        allow_interrupt: z.boolean().optional(),
        max_retries: z.number(),
        message_selection_strategy: z.string().optional(),
        message_group: z.object({
          message: z.object({
            custom_payload: z.object({
              value: z.string(),
            }).array().optional(),
            image_response_card: z.object({
              image_url: z.string().optional(),
              subtitle: z.string().optional(),
              title: z.string(),
              button: z.object({
                text: z.string(),
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
            plain_text_message: z.object({
              value: z.string(),
            }).array().optional(),
            ssml_message: z.object({
              value: z.string(),
            }).array().optional(),
          }).array().optional(),
          variation: z.object({
            custom_payload: z.object({
              value: z.string(),
            }).array().optional(),
            image_response_card: z.object({
              image_url: z.string().optional(),
              subtitle: z.string().optional(),
              title: z.string(),
              button: z.object({
                text: z.string(),
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
            plain_text_message: z.object({
              value: z.string(),
            }).array().optional(),
            ssml_message: z.object({
              value: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        prompt_attempts_specification: z.object({
          allow_interrupt: z.boolean().optional(),
          map_block_key: z.string(),
          allowed_input_types: z.object({
            allow_audio_input: z.boolean(),
            allow_dtmf_input: z.boolean(),
          }).array().optional(),
          audio_and_dtmf_input_specification: z.object({
            start_timeout_ms: z.number(),
            audio_specification: z.object({
              end_timeout_ms: z.number(),
              max_length_ms: z.number(),
            }).array().optional(),
            dtmf_specification: z.object({
              deletion_character: z.string(),
              end_character: z.string(),
              end_timeout_ms: z.number(),
              max_length: z.number(),
            }).array().optional(),
          }).array().optional(),
          text_input_specification: z.object({
            start_timeout_ms: z.number(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      sample_utterance: z.object({
        utterance: z.string(),
      }).array().optional(),
      slot_resolution_setting: z.object({
        slot_resolution_strategy: z.string(),
      }).array().optional(),
      wait_and_continue_specification: z.object({
        active: z.boolean().optional(),
        continue_response: z.object({
          allow_interrupt: z.boolean().optional(),
          message_group: z.object({
            message: z.object({
              custom_payload: z.object({
                value: z.string(),
              }).array().optional(),
              image_response_card: z.object({
                image_url: z.string().optional(),
                subtitle: z.string().optional(),
                title: z.string(),
                button: z.object({
                  text: z.string(),
                  value: z.string(),
                }).array().optional(),
              }).array().optional(),
              plain_text_message: z.object({
                value: z.string(),
              }).array().optional(),
              ssml_message: z.object({
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
            variation: z.object({
              custom_payload: z.object({
                value: z.string(),
              }).array().optional(),
              image_response_card: z.object({
                image_url: z.string().optional(),
                subtitle: z.string().optional(),
                title: z.string(),
                button: z.object({
                  text: z.string(),
                  value: z.string(),
                }).array().optional(),
              }).array().optional(),
              plain_text_message: z.object({
                value: z.string(),
              }).array().optional(),
              ssml_message: z.object({
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        still_waiting_response: z.object({
          allow_interrupt: z.boolean().optional(),
          frequency_in_seconds: z.number(),
          timeout_in_seconds: z.number(),
          message_group: z.object({
            message: z.object({
              custom_payload: z.object({
                value: z.string(),
              }).array().optional(),
              image_response_card: z.object({
                image_url: z.string().optional(),
                subtitle: z.string().optional(),
                title: z.string(),
                button: z.object({
                  text: z.string(),
                  value: z.string(),
                }).array().optional(),
              }).array().optional(),
              plain_text_message: z.object({
                value: z.string(),
              }).array().optional(),
              ssml_message: z.object({
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
            variation: z.object({
              custom_payload: z.object({
                value: z.string(),
              }).array().optional(),
              image_response_card: z.object({
                image_url: z.string().optional(),
                subtitle: z.string().optional(),
                title: z.string(),
                button: z.object({
                  text: z.string(),
                  value: z.string(),
                }).array().optional(),
              }).array().optional(),
              plain_text_message: z.object({
                value: z.string(),
              }).array().optional(),
              ssml_message: z.object({
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        waiting_response: z.object({
          allow_interrupt: z.boolean().optional(),
          message_group: z.object({
            message: z.object({
              custom_payload: z.object({
                value: z.string(),
              }).array().optional(),
              image_response_card: z.object({
                image_url: z.string().optional(),
                subtitle: z.string().optional(),
                title: z.string(),
                button: z.object({
                  text: z.string(),
                  value: z.string(),
                }).array().optional(),
              }).array().optional(),
              plain_text_message: z.object({
                value: z.string(),
              }).array().optional(),
              ssml_message: z.object({
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
            variation: z.object({
              custom_payload: z.object({
                value: z.string(),
              }).array().optional(),
              image_response_card: z.object({
                image_url: z.string().optional(),
                subtitle: z.string().optional(),
                title: z.string(),
                button: z.object({
                  text: z.string(),
                  value: z.string(),
                }).array().optional(),
              }).array().optional(),
              plain_text_message: z.object({
                value: z.string(),
              }).array().optional(),
              ssml_message: z.object({
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  slot_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lexv2models_slot

export function AwsLexv2modelsSlot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lexv2models_slot'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLexv2modelsSlot = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsLexv2modelsSlot, idFilter, baseNode)

export const useAwsLexv2modelsSlots = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsLexv2modelsSlot, idFilter, baseNode)
