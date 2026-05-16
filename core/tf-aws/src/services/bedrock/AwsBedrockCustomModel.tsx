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

export const AwsBedrockCustomModelInputSchema = TfMetaSchema.extend({
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

export const AwsBedrockCustomModelOutputSchema = z.object({
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

export const AwsBedrockCustomModelImportSchema = z.object({
  job_arn: resolvableValue(z.string()),
})

export type AwsBedrockCustomModelInputProps =
  & z.input<typeof AwsBedrockCustomModelInputSchema>
  & z.input<typeof AwsBedrockCustomModelImportSchema>
  & NodeProps

export type AwsBedrockCustomModelOutputProps =
  & z.output<typeof AwsBedrockCustomModelOutputSchema>
  & z.output<typeof AwsBedrockCustomModelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrock_custom_model

export function AwsBedrockCustomModel(
  props: Partial<AwsBedrockCustomModelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_custom_model'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockCustomModelInputSchema}
      _outputSchema={AwsBedrockCustomModelOutputSchema}
      _importSchema={AwsBedrockCustomModelImportSchema}
      {...props}
    />
  )
}

export const useAwsBedrockCustomModel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockCustomModelOutputProps>(
    AwsBedrockCustomModel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockCustomModels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockCustomModelOutputProps>(
    AwsBedrockCustomModel,
    idFilter,
    baseNode,
    optional,
  )
