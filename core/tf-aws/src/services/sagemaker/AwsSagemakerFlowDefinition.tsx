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
  flow_definition_name: resolvableValue(z.string()),
  human_loop_config: resolvableValue(z.object({
    human_task_ui_arn: z.string(),
    task_availability_lifetime_in_seconds: z.number().optional(),
    task_count: z.number(),
    task_description: z.string(),
    task_keywords: z.string().array().optional(),
    task_time_limit_in_seconds: z.number().optional(),
    task_title: z.string(),
    workteam_arn: z.string(),
    public_workforce_task_price: z.object({
      amount_in_usd: z.object({
        cents: z.number().optional(),
        dollars: z.number().optional(),
        tenth_fractions_of_a_cent: z.number().optional(),
      }).optional(),
    }).optional(),
  })),
  output_config: resolvableValue(z.object({
    kms_key_id: z.string().optional(),
    s3_output_path: z.string(),
  })),
  role_arn: resolvableValue(z.string()),
  human_loop_activation_config: resolvableValue(
    z.object({
      human_loop_activation_conditions_config: z.object({
        human_loop_activation_conditions: z.string(),
      }).optional(),
    }).optional(),
  ),
  human_loop_request_source: resolvableValue(
    z.object({
      aws_managed_human_loop_request_source: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_flow_definition

export function AwsSagemakerFlowDefinition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_flow_definition'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerFlowDefinition = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsSagemakerFlowDefinition, idFilter, baseNode)

export const useAwsSagemakerFlowDefinitions = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsSagemakerFlowDefinition, idFilter, baseNode)
