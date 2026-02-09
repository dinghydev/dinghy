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
  base_model_identifier: resolvableValue(z.string()),
  custom_model_name: resolvableValue(z.string()),
  hyperparameters: resolvableValue(z.record(z.string(), z.string())),
  job_name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  custom_model_kms_key_id: resolvableValue(z.string().optional()),
  customization_type: resolvableValue(z.string().optional()),
  output_data_config: resolvableValue(
    z.object({
      s3_uri: z.string(),
    }).array().optional(),
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
    }).array().optional(),
  ),
  validation_data_config: resolvableValue(
    z.object({
      validator: z.object({
        s3_uri: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array(),
      subnet_ids: z.string().array(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  custom_model_arn: z.string().optional(),
  id: z.string().optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrock_custom_model

export function AwsBedrockCustomModel(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsBedrockCustomModel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsBedrockCustomModel, idFilter, baseNode, optional)

export const useAwsBedrockCustomModels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockCustomModel,
    idFilter,
    baseNode,
    optional,
  )
