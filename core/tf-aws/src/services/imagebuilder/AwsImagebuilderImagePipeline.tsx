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
  infrastructure_configuration_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  container_recipe_arn: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  distribution_configuration_arn: resolvableValue(z.string().optional()),
  enhanced_image_metadata_enabled: resolvableValue(z.boolean().optional()),
  execution_role: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  image_recipe_arn: resolvableValue(z.string().optional()),
  image_scanning_configuration: resolvableValue(
    z.object({
      image_scanning_enabled: z.boolean().optional(),
      ecr_configuration: z.object({
        container_tags: z.string().array().optional(),
        repository_name: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  image_tests_configuration: resolvableValue(
    z.object({
      image_tests_enabled: z.boolean().optional(),
      timeout_minutes: z.number().optional(),
    }).optional(),
  ),
  logging_configuration: resolvableValue(
    z.object({
      image_log_group_name: z.string().optional(),
      pipeline_log_group_name: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  schedule: resolvableValue(
    z.object({
      pipeline_execution_start_condition: z.string().optional(),
      schedule_expression: z.string(),
      timezone: z.string().optional(),
    }).optional(),
  ),
  status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  workflow: resolvableValue(
    z.object({
      on_failure: z.string().optional(),
      parallel_group: z.string().optional(),
      workflow_arn: z.string(),
      parameter: z.object({
        name: z.string(),
        value: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  date_created: z.string().optional(),
  date_last_run: z.string().optional(),
  date_next_run: z.string().optional(),
  date_updated: z.string().optional(),
  platform: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/imagebuilder_image_pipeline

export function AwsImagebuilderImagePipeline(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_image_pipeline'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderImagePipeline = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsImagebuilderImagePipeline,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsImagebuilderImagePipelines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsImagebuilderImagePipeline,
    idFilter,
    baseNode,
    optional,
  )
