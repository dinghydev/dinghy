import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLambdaFunction } from './AwsLambdaFunction.tsx'

export const DataAwsLambdaFunctionInputSchema = TfMetaSchema.extend({
  function_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  qualifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsLambdaFunctionOutputSchema = z.object({
  architectures: z.string().array().optional(),
  arn: z.string().optional(),
  capacity_provider_config: z.object({
    lambda_managed_instances_capacity_provider_config: z.object({
      capacity_provider_arn: z.string(),
      execution_environment_memory_gib_per_vcpu: z.number(),
      per_execution_environment_max_concurrency: z.number(),
    }).array(),
  }).array().optional(),
  code_sha256: z.string().optional(),
  code_signing_config_arn: z.string().optional(),
  dead_letter_config: z.object({
    target_arn: z.string(),
  }).array().optional(),
  description: z.string().optional(),
  durable_config: z.object({
    execution_timeout: z.number(),
    retention_period: z.number(),
  }).array().optional(),
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
  response_streaming_invoke_arn: z.string().optional(),
  role: z.string().optional(),
  runtime: z.string().optional(),
  signing_job_arn: z.string().optional(),
  signing_profile_version_arn: z.string().optional(),
  source_code_hash: z.string().optional(),
  source_code_size: z.number().optional(),
  source_kms_key_arn: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  tenancy_config: z.object({
    tenant_isolation_mode: z.string(),
  }).array().optional(),
  timeout: z.number().optional(),
  tracing_config: z.object({
    mode: z.string(),
  }).array().optional(),
  version: z.string().optional(),
  vpc_config: z.object({
    ipv6_allowed_for_dual_stack: z.boolean(),
    security_group_ids: z.set(z.string()),
    subnet_ids: z.set(z.string()),
    vpc_id: z.string(),
  }).array().optional(),
})

export type DataAwsLambdaFunctionInputProps =
  & z.input<typeof DataAwsLambdaFunctionInputSchema>
  & NodeProps

export type DataAwsLambdaFunctionOutputProps =
  & z.output<typeof DataAwsLambdaFunctionOutputSchema>
  & z.output<typeof DataAwsLambdaFunctionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/lambda_function

export function DataAwsLambdaFunction(
  props: Partial<DataAwsLambdaFunctionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLambdaFunction
      _type='aws_lambda_function'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLambdaFunctionInputSchema}
      _outputSchema={DataAwsLambdaFunctionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLambdaFunction = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLambdaFunctionOutputProps>(
    DataAwsLambdaFunction,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLambdaFunctions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLambdaFunctionOutputProps>(
    DataAwsLambdaFunction,
    idFilter,
    baseNode,
    optional,
  )
