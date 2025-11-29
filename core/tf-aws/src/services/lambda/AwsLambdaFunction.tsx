import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lambda_function

export const InputSchema = z.object({
  function_name: resolvableValue(z.string()),
  role: resolvableValue(z.string()),
  architectures: resolvableValue(z.string().array().optional()),
  code_signing_config_arn: resolvableValue(z.string().optional()),
  dead_letter_config: resolvableValue(
    z.object({
      target_arn: z.string(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  environment: resolvableValue(
    z.object({
      variables: z.record(z.string(), z.string()).optional(),
    }).optional(),
  ),
  ephemeral_storage: resolvableValue(
    z.object({
      size: z.number().optional(),
    }).optional(),
  ),
  file_system_config: resolvableValue(
    z.object({
      arn: z.string(),
      local_mount_path: z.string(),
    }).optional(),
  ),
  filename: resolvableValue(z.string().optional()),
  handler: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  image_config: resolvableValue(
    z.object({
      command: z.string().array().optional(),
      entry_point: z.string().array().optional(),
      working_directory: z.string().optional(),
    }).optional(),
  ),
  image_uri: resolvableValue(z.string().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  layers: resolvableValue(z.string().array().optional()),
  logging_config: resolvableValue(
    z.object({
      application_log_level: z.string().optional(),
      log_format: z.string(),
      log_group: z.string().optional(),
      system_log_level: z.string().optional(),
    }).optional(),
  ),
  memory_size: resolvableValue(z.number().optional()),
  package_type: resolvableValue(z.string().optional()),
  publish: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  replace_security_groups_on_destroy: resolvableValue(z.boolean().optional()),
  replacement_security_group_ids: resolvableValue(
    z.string().array().optional(),
  ),
  reserved_concurrent_executions: resolvableValue(z.number().optional()),
  runtime: resolvableValue(z.string().optional()),
  s3_bucket: resolvableValue(z.string().optional()),
  s3_key: resolvableValue(z.string().optional()),
  s3_object_version: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
  snap_start: resolvableValue(
    z.object({
      apply_on: z.string(),
      optimization_status: z.string(),
    }).optional(),
  ),
  source_code_hash: resolvableValue(z.string().optional()),
  source_kms_key_arn: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeout: resolvableValue(z.number().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  tracing_config: resolvableValue(
    z.object({
      mode: z.string(),
    }).optional(),
  ),
  vpc_config: resolvableValue(
    z.object({
      ipv6_allowed_for_dual_stack: z.boolean().optional(),
      security_group_ids: z.string().array(),
      subnet_ids: z.string().array(),
      vpc_id: z.string(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  code_sha256: z.string().optional(),
  invoke_arn: z.string().optional(),
  last_modified: z.string().optional(),
  qualified_arn: z.string().optional(),
  qualified_invoke_arn: z.string().optional(),
  signing_job_arn: z.string().optional(),
  signing_profile_version_arn: z.string().optional(),
  source_code_size: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
})

export const ImportSchema = z.object({
  function_name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLambdaFunction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_function'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsLambdaFunction = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLambdaFunction, node, id)

export const useAwsLambdaFunctions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLambdaFunction, node, id)
