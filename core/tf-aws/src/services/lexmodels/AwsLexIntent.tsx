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
  fulfillment_activity: resolvableValue(z.object({
    type: z.string(),
    code_hook: z.object({
      message_version: z.string(),
      uri: z.string(),
    }).optional(),
  })),
  name: resolvableValue(z.string()),
  conclusion_statement: resolvableValue(
    z.object({
      response_card: z.string().optional(),
      message: z.object({
        content: z.string(),
        content_type: z.string(),
        group_number: z.number().optional(),
      }).array(),
    }).optional(),
  ),
  confirmation_prompt: resolvableValue(
    z.object({
      max_attempts: z.number(),
      response_card: z.string().optional(),
      message: z.object({
        content: z.string(),
        content_type: z.string(),
        group_number: z.number().optional(),
      }).array(),
    }).optional(),
  ),
  create_version: resolvableValue(z.boolean().optional()),
  description: resolvableValue(z.string().optional()),
  dialog_code_hook: resolvableValue(
    z.object({
      message_version: z.string(),
      uri: z.string(),
    }).optional(),
  ),
  follow_up_prompt: resolvableValue(
    z.object({
      prompt: z.object({
        max_attempts: z.number(),
        response_card: z.string().optional(),
        message: z.object({
          content: z.string(),
          content_type: z.string(),
          group_number: z.number().optional(),
        }).array(),
      }),
      rejection_statement: z.object({
        response_card: z.string().optional(),
        message: z.object({
          content: z.string(),
          content_type: z.string(),
          group_number: z.number().optional(),
        }).array(),
      }),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  parent_intent_signature: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  rejection_statement: resolvableValue(
    z.object({
      response_card: z.string().optional(),
      message: z.object({
        content: z.string(),
        content_type: z.string(),
        group_number: z.number().optional(),
      }).array(),
    }).optional(),
  ),
  sample_utterances: resolvableValue(z.string().array().optional()),
  slot: resolvableValue(
    z.object({
      description: z.string().optional(),
      name: z.string(),
      priority: z.number().optional(),
      response_card: z.string().optional(),
      sample_utterances: z.string().array().optional(),
      slot_constraint: z.string(),
      slot_type: z.string(),
      slot_type_version: z.string().optional(),
      value_elicitation_prompt: z.object({
        max_attempts: z.number(),
        response_card: z.string().optional(),
        message: z.object({
          content: z.string(),
          content_type: z.string(),
          group_number: z.number().optional(),
        }).array(),
      }).optional(),
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
  arn: z.string().optional(),
  checksum: z.string().optional(),
  created_date: z.string().optional(),
  last_updated_date: z.string().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lex_intent

export function AwsLexIntent(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lex_intent'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLexIntent = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsLexIntent, idFilter, baseNode, optional)

export const useAwsLexIntents = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsLexIntent, idFilter, baseNode, optional)
