import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsImagebuilderImagePipeline } from './AwsImagebuilderImagePipeline.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  image_scanning_configuration: resolvableValue(
    z.object({
      ecr_configuration: z.object({
        container_tags: z.string().array(),
        repository_name: z.string(),
      }).array(),
      image_scanning_enabled: z.boolean(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  container_recipe_arn: z.string().optional(),
  date_created: z.string().optional(),
  date_last_run: z.string().optional(),
  date_next_run: z.string().optional(),
  date_updated: z.string().optional(),
  description: z.string().optional(),
  distribution_configuration_arn: z.string().optional(),
  enhanced_image_metadata_enabled: z.boolean().optional(),
  image_recipe_arn: z.string().optional(),
  image_tests_configuration: z.object({
    image_tests_enabled: z.boolean(),
    timeout_minutes: z.number(),
  }).array().optional(),
  infrastructure_configuration_arn: z.string().optional(),
  name: z.string().optional(),
  platform: z.string().optional(),
  schedule: z.object({
    pipeline_execution_start_condition: z.string(),
    schedule_expression: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/imagebuilder_image_pipeline

export function DataAwsImagebuilderImagePipeline(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsImagebuilderImagePipeline
      _type='aws_imagebuilder_image_pipeline'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsImagebuilderImagePipeline = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsImagebuilderImagePipeline,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsImagebuilderImagePipelines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsImagebuilderImagePipeline,
    idFilter,
    baseNode,
    optional,
  )
