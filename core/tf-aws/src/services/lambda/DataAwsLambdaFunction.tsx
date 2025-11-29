import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLambdaFunction } from './AwsLambdaFunction.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lambda_function

export const InputSchema = z.object({
  function_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  architectures: z.string().array().optional(),
  arn: z.string().optional(),
  code_sha256: z.string().optional(),
  code_signing_config_arn: z.string().optional(),
  dead_letter_config: z.object({
    target_arn: z.string(),
  }).array().optional(),
  description: z.string().optional(),
  environment: z.object({
    variables: z.record(z.string(), z.string()),
  }).array().optional(),
  ephemeral_storage: z.object({
    size: z.number(),
  }).array().optional(),
  file_system_config: z.object({
    arn: z.string(),
    local_mount_path: z.string(),
  }).array().optional(),
  handler: z.string().optional(),
  image_uri: z.string().optional(),
  invoke_arn: z.string().optional(),
  kms_key_arn: z.string().optional(),
  last_modified: z.string().optional(),
  layers: z.string().array().optional(),
  logging_config: z.object({
    application_log_level: z.string(),
    log_format: z.string(),
    log_group: z.string(),
    system_log_level: z.string(),
  }).array().optional(),
  memory_size: z.number().optional(),
  qualified_arn: z.string().optional(),
  qualified_invoke_arn: z.string().optional(),
  reserved_concurrent_executions: z.number().optional(),
  role: z.string().optional(),
  runtime: z.string().optional(),
  signing_job_arn: z.string().optional(),
  signing_profile_version_arn: z.string().optional(),
  source_code_hash: z.string().optional(),
  source_code_size: z.number().optional(),
  source_kms_key_arn: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  timeout: z.number().optional(),
  tracing_config: z.object({
    mode: z.string(),
  }).array().optional(),
  version: z.string().optional(),
  vpc_config: z.object({
    ipv6_allowed_for_dual_stack: z.boolean(),
    security_group_ids: z.string().array(),
    subnet_ids: z.string().array(),
    vpc_id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLambdaFunction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLambdaFunction
      _type='aws_lambda_function'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLambdaFunction = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLambdaFunction, node, id)

export const useDataAwsLambdaFunctions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLambdaFunction, node, id)
