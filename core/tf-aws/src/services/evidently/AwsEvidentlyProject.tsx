import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/evidently_project

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEvidentlyProject(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_evidently_project'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEvidentlyProject = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEvidentlyProject, node, id)

export const useAwsEvidentlyProjects = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEvidentlyProject, node, id)
