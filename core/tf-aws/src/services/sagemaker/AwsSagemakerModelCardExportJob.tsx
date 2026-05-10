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
  model_card_export_job_name: resolvableValue(z.string()),
  model_card_name: resolvableValue(z.string()),
  model_card_version: resolvableValue(z.number().optional()),
  output_config: resolvableValue(
    z.object({
      s3_output_path: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  export_artifacts: z.object({
    s3_export_artifacts: z.string(),
  }).array().optional(),
  model_card_export_job_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_model_card_export_job

export function AwsSagemakerModelCardExportJob(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_model_card_export_job'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerModelCardExportJob = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSagemakerModelCardExportJob,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerModelCardExportJobs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSagemakerModelCardExportJob,
    idFilter,
    baseNode,
    optional,
  )
