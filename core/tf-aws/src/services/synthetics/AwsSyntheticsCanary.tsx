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
  artifact_s3_location: resolvableValue(z.string()),
  execution_role_arn: resolvableValue(z.string()),
  handler: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  runtime_version: resolvableValue(z.string()),
  schedule: resolvableValue(z.object({
    duration_in_seconds: z.number().optional(),
    expression: z.string(),
    retry_config: z.object({
      max_retries: z.number(),
    }).optional(),
  })),
  artifact_config: resolvableValue(
    z.object({
      s3_encryption: z.object({
        encryption_mode: z.string().optional(),
        kms_key_arn: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  delete_lambda: resolvableValue(z.boolean().optional()),
  failure_retention_period: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  run_config: resolvableValue(
    z.object({
      active_tracing: z.boolean().optional(),
      environment_variables: z.record(z.string(), z.string()).optional(),
      ephemeral_storage: z.number().optional(),
      memory_in_mb: z.number().optional(),
      timeout_in_seconds: z.number().optional(),
    }).optional(),
  ),
  s3_bucket: resolvableValue(z.string().optional()),
  s3_key: resolvableValue(z.string().optional()),
  s3_version: resolvableValue(z.string().optional()),
  start_canary: resolvableValue(z.boolean().optional()),
  success_retention_period: resolvableValue(z.number().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_config: resolvableValue(
    z.object({
      ipv6_allowed_for_dual_stack: z.boolean().optional(),
      security_group_ids: z.string().array().optional(),
      subnet_ids: z.string().array().optional(),
      vpc_id: z.string().optional(),
    }).optional(),
  ),
  zip_file: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  engine_arn: z.string().optional(),
  id: z.string().optional(),
  source_location_arn: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  timeline: z.object({
    created: z.string(),
    last_modified: z.string(),
    last_started: z.string(),
    last_stopped: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/synthetics_canary

export function AwsSyntheticsCanary(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_synthetics_canary'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSyntheticsCanary = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsSyntheticsCanary, idFilter, baseNode, optional)

export const useAwsSyntheticsCanarys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsSyntheticsCanary, idFilter, baseNode, optional)
