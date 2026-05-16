import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBedrockCustomModel } from './AwsBedrockCustomModel.tsx'

export const DataAwsBedrockCustomModelInputSchema = TfMetaSchema.extend({
  model_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsBedrockCustomModelOutputSchema = z.object({
  base_model_arn: z.string().optional(),
  creation_time: z.string().optional(),
  hyperparameters: z.record(z.string(), z.string()).optional(),
  id: z.string().optional(),
  job_arn: z.string().optional(),
  job_name: z.string().optional(),
  job_tags: z.record(z.string(), z.string()).optional(),
  model_arn: z.string().optional(),
  model_kms_key_arn: z.string().optional(),
  model_name: z.string().optional(),
  model_tags: z.record(z.string(), z.string()).optional(),
  output_data_config: z.object({
    s3_uri: z.string(),
  }).array().optional(),
  training_data_config: z.object({
    s3_uri: z.string(),
  }).array().optional(),
  training_metrics: z.object({
    training_loss: z.number(),
  }).array().optional(),
  validation_data_config: z.object({
    validator: z.object({
      s3_uri: z.string(),
    }).array(),
  }).array().optional(),
  validation_metrics: z.object({
    validation_loss: z.number(),
  }).array().optional(),
})

export type DataAwsBedrockCustomModelInputProps =
  & z.input<typeof DataAwsBedrockCustomModelInputSchema>
  & NodeProps

export type DataAwsBedrockCustomModelOutputProps =
  & z.output<typeof DataAwsBedrockCustomModelOutputSchema>
  & z.output<typeof DataAwsBedrockCustomModelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/bedrock_custom_model

export function DataAwsBedrockCustomModel(
  props: Partial<DataAwsBedrockCustomModelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsBedrockCustomModel
      _type='aws_bedrock_custom_model'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsBedrockCustomModelInputSchema}
      _outputSchema={DataAwsBedrockCustomModelOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBedrockCustomModel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsBedrockCustomModelOutputProps>(
    DataAwsBedrockCustomModel,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsBedrockCustomModels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsBedrockCustomModelOutputProps>(
    DataAwsBedrockCustomModel,
    idFilter,
    baseNode,
    optional,
  )
