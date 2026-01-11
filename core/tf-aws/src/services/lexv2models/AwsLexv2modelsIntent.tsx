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
  locale_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  closing_setting: resolvableValue(
    z.object({
      active: z.boolean().optional(),
      closing_response: z.object({
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
      conditional: z.object({
        active: z.boolean(),
        conditional_branch: z.object({
          name: z.string(),
          condition: z.object({
            expression_string: z.string(),
          }).array().optional(),
          next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          response: z.object({
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
        default_branch: z.object({
          next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          response: z.object({
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
      next_step: z.object({
        session_attributes: z.record(z.string(), z.string()).optional(),
        dialog_action: z.object({
          slot_to_elicit: z.string().optional(),
          suppress_next_message: z.boolean().optional(),
          type: z.string(),
        }).array().optional(),
        intent: z.object({
          name: z.string().optional(),
          slot: z.object({
            map_block_key: z.string(),
            shape: z.string().optional(),
            value: z.object({
              interpreted_value: z.string().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  confirmation_setting: resolvableValue(
    z.object({
      active: z.boolean().optional(),
      code_hook: z.object({
        active: z.boolean(),
        enable_code_hook_invocation: z.boolean(),
        invocation_label: z.string().optional(),
        post_code_hook_specification: z.object({
          failure_conditional: z.object({
            active: z.boolean(),
            conditional_branch: z.object({
              name: z.string(),
              condition: z.object({
                expression_string: z.string(),
              }).array().optional(),
              next_step: z.object({
                session_attributes: z.record(z.string(), z.string()).optional(),
                dialog_action: z.object({
                  slot_to_elicit: z.string().optional(),
                  suppress_next_message: z.boolean().optional(),
                  type: z.string(),
                }).array().optional(),
                intent: z.object({
                  name: z.string().optional(),
                  slot: z.object({
                    map_block_key: z.string(),
                    shape: z.string().optional(),
                    value: z.object({
                      interpreted_value: z.string().optional(),
                    }).array().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              response: z.object({
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
            default_branch: z.object({
              next_step: z.object({
                session_attributes: z.record(z.string(), z.string()).optional(),
                dialog_action: z.object({
                  slot_to_elicit: z.string().optional(),
                  suppress_next_message: z.boolean().optional(),
                  type: z.string(),
                }).array().optional(),
                intent: z.object({
                  name: z.string().optional(),
                  slot: z.object({
                    map_block_key: z.string(),
                    shape: z.string().optional(),
                    value: z.object({
                      interpreted_value: z.string().optional(),
                    }).array().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              response: z.object({
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
          failure_next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          failure_response: z.object({
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
          success_conditional: z.object({
            active: z.boolean(),
            conditional_branch: z.object({
              name: z.string(),
              condition: z.object({
                expression_string: z.string(),
              }).array().optional(),
              next_step: z.object({
                session_attributes: z.record(z.string(), z.string()).optional(),
                dialog_action: z.object({
                  slot_to_elicit: z.string().optional(),
                  suppress_next_message: z.boolean().optional(),
                  type: z.string(),
                }).array().optional(),
                intent: z.object({
                  name: z.string().optional(),
                  slot: z.object({
                    map_block_key: z.string(),
                    shape: z.string().optional(),
                    value: z.object({
                      interpreted_value: z.string().optional(),
                    }).array().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              response: z.object({
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
            default_branch: z.object({
              next_step: z.object({
                session_attributes: z.record(z.string(), z.string()).optional(),
                dialog_action: z.object({
                  slot_to_elicit: z.string().optional(),
                  suppress_next_message: z.boolean().optional(),
                  type: z.string(),
                }).array().optional(),
                intent: z.object({
                  name: z.string().optional(),
                  slot: z.object({
                    map_block_key: z.string(),
                    shape: z.string().optional(),
                    value: z.object({
                      interpreted_value: z.string().optional(),
                    }).array().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              response: z.object({
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
          success_next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          success_response: z.object({
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
          timeout_conditional: z.object({
            active: z.boolean(),
            conditional_branch: z.object({
              name: z.string(),
              condition: z.object({
                expression_string: z.string(),
              }).array().optional(),
              next_step: z.object({
                session_attributes: z.record(z.string(), z.string()).optional(),
                dialog_action: z.object({
                  slot_to_elicit: z.string().optional(),
                  suppress_next_message: z.boolean().optional(),
                  type: z.string(),
                }).array().optional(),
                intent: z.object({
                  name: z.string().optional(),
                  slot: z.object({
                    map_block_key: z.string(),
                    shape: z.string().optional(),
                    value: z.object({
                      interpreted_value: z.string().optional(),
                    }).array().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              response: z.object({
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
            default_branch: z.object({
              next_step: z.object({
                session_attributes: z.record(z.string(), z.string()).optional(),
                dialog_action: z.object({
                  slot_to_elicit: z.string().optional(),
                  suppress_next_message: z.boolean().optional(),
                  type: z.string(),
                }).array().optional(),
                intent: z.object({
                  name: z.string().optional(),
                  slot: z.object({
                    map_block_key: z.string(),
                    shape: z.string().optional(),
                    value: z.object({
                      interpreted_value: z.string().optional(),
                    }).array().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              response: z.object({
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
          timeout_next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          timeout_response: z.object({
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
      confirmation_conditional: z.object({
        active: z.boolean(),
        conditional_branch: z.object({
          name: z.string(),
          condition: z.object({
            expression_string: z.string(),
          }).array().optional(),
          next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          response: z.object({
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
        default_branch: z.object({
          next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          response: z.object({
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
      confirmation_next_step: z.object({
        session_attributes: z.record(z.string(), z.string()).optional(),
        dialog_action: z.object({
          slot_to_elicit: z.string().optional(),
          suppress_next_message: z.boolean().optional(),
          type: z.string(),
        }).array().optional(),
        intent: z.object({
          name: z.string().optional(),
          slot: z.object({
            map_block_key: z.string(),
            shape: z.string().optional(),
            value: z.object({
              interpreted_value: z.string().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      confirmation_response: z.object({
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
      declination_conditional: z.object({
        active: z.boolean(),
        conditional_branch: z.object({
          name: z.string(),
          condition: z.object({
            expression_string: z.string(),
          }).array().optional(),
          next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          response: z.object({
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
        default_branch: z.object({
          next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          response: z.object({
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
      declination_next_step: z.object({
        session_attributes: z.record(z.string(), z.string()).optional(),
        dialog_action: z.object({
          slot_to_elicit: z.string().optional(),
          suppress_next_message: z.boolean().optional(),
          type: z.string(),
        }).array().optional(),
        intent: z.object({
          name: z.string().optional(),
          slot: z.object({
            map_block_key: z.string(),
            shape: z.string().optional(),
            value: z.object({
              interpreted_value: z.string().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      declination_response: z.object({
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
      elicitation_code_hook: z.object({
        enable_code_hook_invocation: z.boolean().optional(),
        invocation_label: z.string().optional(),
      }).array().optional(),
      failure_conditional: z.object({
        active: z.boolean(),
        conditional_branch: z.object({
          name: z.string(),
          condition: z.object({
            expression_string: z.string(),
          }).array().optional(),
          next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          response: z.object({
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
        default_branch: z.object({
          next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          response: z.object({
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
      failure_next_step: z.object({
        session_attributes: z.record(z.string(), z.string()).optional(),
        dialog_action: z.object({
          slot_to_elicit: z.string().optional(),
          suppress_next_message: z.boolean().optional(),
          type: z.string(),
        }).array().optional(),
        intent: z.object({
          name: z.string().optional(),
          slot: z.object({
            map_block_key: z.string(),
            shape: z.string().optional(),
            value: z.object({
              interpreted_value: z.string().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      failure_response: z.object({
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
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  dialog_code_hook: resolvableValue(
    z.object({
      enabled: z.boolean(),
    }).array().optional(),
  ),
  fulfillment_code_hook: resolvableValue(
    z.object({
      active: z.boolean().optional(),
      enabled: z.boolean(),
      fulfillment_updates_specification: z.object({
        active: z.boolean(),
        timeout_in_seconds: z.number().optional(),
        start_response: z.object({
          allow_interrupt: z.boolean().optional(),
          delay_in_seconds: z.number().optional(),
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
        update_response: z.object({
          allow_interrupt: z.boolean().optional(),
          frequency_in_seconds: z.number(),
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
      post_fulfillment_status_specification: z.object({
        failure_conditional: z.object({
          active: z.boolean(),
          conditional_branch: z.object({
            name: z.string(),
            condition: z.object({
              expression_string: z.string(),
            }).array().optional(),
            next_step: z.object({
              session_attributes: z.record(z.string(), z.string()).optional(),
              dialog_action: z.object({
                slot_to_elicit: z.string().optional(),
                suppress_next_message: z.boolean().optional(),
                type: z.string(),
              }).array().optional(),
              intent: z.object({
                name: z.string().optional(),
                slot: z.object({
                  map_block_key: z.string(),
                  shape: z.string().optional(),
                  value: z.object({
                    interpreted_value: z.string().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
            response: z.object({
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
          default_branch: z.object({
            next_step: z.object({
              session_attributes: z.record(z.string(), z.string()).optional(),
              dialog_action: z.object({
                slot_to_elicit: z.string().optional(),
                suppress_next_message: z.boolean().optional(),
                type: z.string(),
              }).array().optional(),
              intent: z.object({
                name: z.string().optional(),
                slot: z.object({
                  map_block_key: z.string(),
                  shape: z.string().optional(),
                  value: z.object({
                    interpreted_value: z.string().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
            response: z.object({
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
        failure_next_step: z.object({
          session_attributes: z.record(z.string(), z.string()).optional(),
          dialog_action: z.object({
            slot_to_elicit: z.string().optional(),
            suppress_next_message: z.boolean().optional(),
            type: z.string(),
          }).array().optional(),
          intent: z.object({
            name: z.string().optional(),
            slot: z.object({
              map_block_key: z.string(),
              shape: z.string().optional(),
              value: z.object({
                interpreted_value: z.string().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        failure_response: z.object({
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
        success_conditional: z.object({
          active: z.boolean(),
          conditional_branch: z.object({
            name: z.string(),
            condition: z.object({
              expression_string: z.string(),
            }).array().optional(),
            next_step: z.object({
              session_attributes: z.record(z.string(), z.string()).optional(),
              dialog_action: z.object({
                slot_to_elicit: z.string().optional(),
                suppress_next_message: z.boolean().optional(),
                type: z.string(),
              }).array().optional(),
              intent: z.object({
                name: z.string().optional(),
                slot: z.object({
                  map_block_key: z.string(),
                  shape: z.string().optional(),
                  value: z.object({
                    interpreted_value: z.string().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
            response: z.object({
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
          default_branch: z.object({
            next_step: z.object({
              session_attributes: z.record(z.string(), z.string()).optional(),
              dialog_action: z.object({
                slot_to_elicit: z.string().optional(),
                suppress_next_message: z.boolean().optional(),
                type: z.string(),
              }).array().optional(),
              intent: z.object({
                name: z.string().optional(),
                slot: z.object({
                  map_block_key: z.string(),
                  shape: z.string().optional(),
                  value: z.object({
                    interpreted_value: z.string().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
            response: z.object({
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
        success_next_step: z.object({
          session_attributes: z.record(z.string(), z.string()).optional(),
          dialog_action: z.object({
            slot_to_elicit: z.string().optional(),
            suppress_next_message: z.boolean().optional(),
            type: z.string(),
          }).array().optional(),
          intent: z.object({
            name: z.string().optional(),
            slot: z.object({
              map_block_key: z.string(),
              shape: z.string().optional(),
              value: z.object({
                interpreted_value: z.string().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        success_response: z.object({
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
        timeout_conditional: z.object({
          active: z.boolean(),
          conditional_branch: z.object({
            name: z.string(),
            condition: z.object({
              expression_string: z.string(),
            }).array().optional(),
            next_step: z.object({
              session_attributes: z.record(z.string(), z.string()).optional(),
              dialog_action: z.object({
                slot_to_elicit: z.string().optional(),
                suppress_next_message: z.boolean().optional(),
                type: z.string(),
              }).array().optional(),
              intent: z.object({
                name: z.string().optional(),
                slot: z.object({
                  map_block_key: z.string(),
                  shape: z.string().optional(),
                  value: z.object({
                    interpreted_value: z.string().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
            response: z.object({
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
          default_branch: z.object({
            next_step: z.object({
              session_attributes: z.record(z.string(), z.string()).optional(),
              dialog_action: z.object({
                slot_to_elicit: z.string().optional(),
                suppress_next_message: z.boolean().optional(),
                type: z.string(),
              }).array().optional(),
              intent: z.object({
                name: z.string().optional(),
                slot: z.object({
                  map_block_key: z.string(),
                  shape: z.string().optional(),
                  value: z.object({
                    interpreted_value: z.string().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
            response: z.object({
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
        timeout_next_step: z.object({
          session_attributes: z.record(z.string(), z.string()).optional(),
          dialog_action: z.object({
            slot_to_elicit: z.string().optional(),
            suppress_next_message: z.boolean().optional(),
            type: z.string(),
          }).array().optional(),
          intent: z.object({
            name: z.string().optional(),
            slot: z.object({
              map_block_key: z.string(),
              shape: z.string().optional(),
              value: z.object({
                interpreted_value: z.string().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        timeout_response: z.object({
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
  initial_response_setting: resolvableValue(
    z.object({
      code_hook: z.object({
        active: z.boolean(),
        enable_code_hook_invocation: z.boolean(),
        invocation_label: z.string().optional(),
        post_code_hook_specification: z.object({
          failure_conditional: z.object({
            active: z.boolean(),
            conditional_branch: z.object({
              name: z.string(),
              condition: z.object({
                expression_string: z.string(),
              }).array().optional(),
              next_step: z.object({
                session_attributes: z.record(z.string(), z.string()).optional(),
                dialog_action: z.object({
                  slot_to_elicit: z.string().optional(),
                  suppress_next_message: z.boolean().optional(),
                  type: z.string(),
                }).array().optional(),
                intent: z.object({
                  name: z.string().optional(),
                  slot: z.object({
                    map_block_key: z.string(),
                    shape: z.string().optional(),
                    value: z.object({
                      interpreted_value: z.string().optional(),
                    }).array().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              response: z.object({
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
            default_branch: z.object({
              next_step: z.object({
                session_attributes: z.record(z.string(), z.string()).optional(),
                dialog_action: z.object({
                  slot_to_elicit: z.string().optional(),
                  suppress_next_message: z.boolean().optional(),
                  type: z.string(),
                }).array().optional(),
                intent: z.object({
                  name: z.string().optional(),
                  slot: z.object({
                    map_block_key: z.string(),
                    shape: z.string().optional(),
                    value: z.object({
                      interpreted_value: z.string().optional(),
                    }).array().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              response: z.object({
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
          failure_next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          failure_response: z.object({
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
          success_conditional: z.object({
            active: z.boolean(),
            conditional_branch: z.object({
              name: z.string(),
              condition: z.object({
                expression_string: z.string(),
              }).array().optional(),
              next_step: z.object({
                session_attributes: z.record(z.string(), z.string()).optional(),
                dialog_action: z.object({
                  slot_to_elicit: z.string().optional(),
                  suppress_next_message: z.boolean().optional(),
                  type: z.string(),
                }).array().optional(),
                intent: z.object({
                  name: z.string().optional(),
                  slot: z.object({
                    map_block_key: z.string(),
                    shape: z.string().optional(),
                    value: z.object({
                      interpreted_value: z.string().optional(),
                    }).array().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              response: z.object({
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
            default_branch: z.object({
              next_step: z.object({
                session_attributes: z.record(z.string(), z.string()).optional(),
                dialog_action: z.object({
                  slot_to_elicit: z.string().optional(),
                  suppress_next_message: z.boolean().optional(),
                  type: z.string(),
                }).array().optional(),
                intent: z.object({
                  name: z.string().optional(),
                  slot: z.object({
                    map_block_key: z.string(),
                    shape: z.string().optional(),
                    value: z.object({
                      interpreted_value: z.string().optional(),
                    }).array().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              response: z.object({
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
          success_next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          success_response: z.object({
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
          timeout_conditional: z.object({
            active: z.boolean(),
            conditional_branch: z.object({
              name: z.string(),
              condition: z.object({
                expression_string: z.string(),
              }).array().optional(),
              next_step: z.object({
                session_attributes: z.record(z.string(), z.string()).optional(),
                dialog_action: z.object({
                  slot_to_elicit: z.string().optional(),
                  suppress_next_message: z.boolean().optional(),
                  type: z.string(),
                }).array().optional(),
                intent: z.object({
                  name: z.string().optional(),
                  slot: z.object({
                    map_block_key: z.string(),
                    shape: z.string().optional(),
                    value: z.object({
                      interpreted_value: z.string().optional(),
                    }).array().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              response: z.object({
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
            default_branch: z.object({
              next_step: z.object({
                session_attributes: z.record(z.string(), z.string()).optional(),
                dialog_action: z.object({
                  slot_to_elicit: z.string().optional(),
                  suppress_next_message: z.boolean().optional(),
                  type: z.string(),
                }).array().optional(),
                intent: z.object({
                  name: z.string().optional(),
                  slot: z.object({
                    map_block_key: z.string(),
                    shape: z.string().optional(),
                    value: z.object({
                      interpreted_value: z.string().optional(),
                    }).array().optional(),
                  }).array().optional(),
                }).array().optional(),
              }).array().optional(),
              response: z.object({
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
          timeout_next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          timeout_response: z.object({
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
      conditional: z.object({
        active: z.boolean(),
        conditional_branch: z.object({
          name: z.string(),
          condition: z.object({
            expression_string: z.string(),
          }).array().optional(),
          next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          response: z.object({
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
        default_branch: z.object({
          next_step: z.object({
            session_attributes: z.record(z.string(), z.string()).optional(),
            dialog_action: z.object({
              slot_to_elicit: z.string().optional(),
              suppress_next_message: z.boolean().optional(),
              type: z.string(),
            }).array().optional(),
            intent: z.object({
              name: z.string().optional(),
              slot: z.object({
                map_block_key: z.string(),
                shape: z.string().optional(),
                value: z.object({
                  interpreted_value: z.string().optional(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          response: z.object({
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
      initial_response: z.object({
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
      next_step: z.object({
        session_attributes: z.record(z.string(), z.string()).optional(),
        dialog_action: z.object({
          slot_to_elicit: z.string().optional(),
          suppress_next_message: z.boolean().optional(),
          type: z.string(),
        }).array().optional(),
        intent: z.object({
          name: z.string().optional(),
          slot: z.object({
            map_block_key: z.string(),
            shape: z.string().optional(),
            value: z.object({
              interpreted_value: z.string().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  input_context: resolvableValue(
    z.object({
      name: z.string(),
    }).array().optional(),
  ),
  kendra_configuration: resolvableValue(
    z.object({
      kendra_index: z.string(),
      query_filter_string: z.string().optional(),
      query_filter_string_enabled: z.boolean().optional(),
    }).array().optional(),
  ),
  output_context: resolvableValue(
    z.object({
      name: z.string(),
      time_to_live_in_seconds: z.number(),
      turns_to_live: z.number(),
    }).array().optional(),
  ),
  parent_intent_signature: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  sample_utterance: resolvableValue(
    z.object({
      utterance: z.string(),
    }).array().optional(),
  ),
  slot_priority: resolvableValue(
    z.object({
      priority: z.number(),
      slot_id: z.string(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  creation_date_time: z.string().optional(),
  id: z.string().optional(),
  intent_id: z.string().optional(),
  last_updated_date_time: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lexv2models_intent

export function AwsLexv2modelsIntent(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lexv2models_intent'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLexv2modelsIntent = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsLexv2modelsIntent, idFilter, baseNode, optional)

export const useAwsLexv2modelsIntents = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsLexv2modelsIntent, idFilter, baseNode, optional)
