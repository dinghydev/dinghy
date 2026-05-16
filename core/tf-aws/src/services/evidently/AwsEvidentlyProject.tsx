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

export const AwsEvidentlyProjectInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  data_delivery: resolvableValue(
    z.object({
      cloudwatch_logs: z.object({
        log_group: z.string().optional(),
      }).optional(),
      s3_destination: z.object({
        bucket: z.string().optional(),
        prefix: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEvidentlyProjectOutputSchema = z.object({
  active_experiment_count: z.number().optional(),
  active_launch_count: z.number().optional(),
  arn: z.string().optional(),
  created_time: z.string().optional(),
  experiment_count: z.number().optional(),
  feature_count: z.number().optional(),
  id: z.string().optional(),
  last_updated_time: z.string().optional(),
  launch_count: z.number().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEvidentlyProjectInputProps =
  & z.input<typeof AwsEvidentlyProjectInputSchema>
  & NodeProps

export type AwsEvidentlyProjectOutputProps =
  & z.output<typeof AwsEvidentlyProjectOutputSchema>
  & z.output<typeof AwsEvidentlyProjectInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/evidently_project

export function AwsEvidentlyProject(
  props: Partial<AwsEvidentlyProjectInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_evidently_project'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEvidentlyProjectInputSchema}
      _outputSchema={AwsEvidentlyProjectOutputSchema}
      {...props}
    />
  )
}

export const useAwsEvidentlyProject = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEvidentlyProjectOutputProps>(
    AwsEvidentlyProject,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEvidentlyProjects = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEvidentlyProjectOutputProps>(
    AwsEvidentlyProject,
    idFilter,
    baseNode,
    optional,
  )
