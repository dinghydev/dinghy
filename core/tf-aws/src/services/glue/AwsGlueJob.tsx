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
  command: resolvableValue(z.object({
    name: z.string().optional(),
    python_version: z.string().optional(),
    runtime: z.string().optional(),
    script_location: z.string(),
  })),
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  connections: resolvableValue(z.string().array().optional()),
  default_arguments: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  execution_class: resolvableValue(z.string().optional()),
  execution_property: resolvableValue(
    z.object({
      max_concurrent_runs: z.number().optional(),
    }).optional(),
  ),
  glue_version: resolvableValue(z.string().optional()),
  job_mode: resolvableValue(z.string().optional()),
  job_run_queuing_enabled: resolvableValue(z.boolean().optional()),
  maintenance_window: resolvableValue(z.string().optional()),
  max_capacity: resolvableValue(z.number().optional()),
  max_retries: resolvableValue(z.number().optional()),
  non_overridable_arguments: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  notification_property: resolvableValue(
    z.object({
      notify_delay_after: z.number().optional(),
    }).optional(),
  ),
  number_of_workers: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  security_configuration: resolvableValue(z.string().optional()),
  source_control_details: resolvableValue(
    z.object({
      auth_strategy: z.string().optional(),
      auth_token: z.string().optional(),
      branch: z.string().optional(),
      folder: z.string().optional(),
      last_commit_id: z.string().optional(),
      owner: z.string().optional(),
      provider: z.string().optional(),
      repository: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeout: resolvableValue(z.number().optional()),
  worker_type: resolvableValue(z.string().optional()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_job

export function AwsGlueJob(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_job'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueJob = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsGlueJob, idFilter, baseNode, optional)

export const useAwsGlueJobs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsGlueJob, idFilter, baseNode, optional)
