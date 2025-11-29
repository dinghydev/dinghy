import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrock_custom_model

export const InputSchema = z.object({
  base_model_identifier: resolvableValue(z.string()),
  custom_model_name: resolvableValue(z.string()),
  hyperparameters: resolvableValue(z.record(z.string(), z.string())),
  id: resolvableValue(z.string()),
  job_name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  custom_model_kms_key_id: resolvableValue(z.string().optional()),
  customization_type: resolvableValue(z.string().optional()),
  output_data_config: resolvableValue(
    z.object({
      s3_uri: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  training_data_config: resolvableValue(
    z.object({
      s3_uri: z.string(),
    }).optional(),
  ),
  validation_data_config: resolvableValue(
    z.object({
      validator: z.object({
        s3_uri: z.string(),
      }).optional(),
    }).optional(),
  ),
  vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array(),
      subnet_ids: z.string().array(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  custom_model_arn: z.string().optional(),
  job_arn: z.string().optional(),
  job_status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  training_metrics: z.object({
    training_loss: z.number(),
  }).array().optional(),
  validation_metrics: z.object({
    validation_loss: z.number(),
  }).array().optional(),
})

export const ImportSchema = z.object({
  job_arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockCustomModel(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_custom_model'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsBedrockCustomModel = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBedrockCustomModel, node, id)

export const useAwsBedrockCustomModels = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBedrockCustomModel, node, id)
