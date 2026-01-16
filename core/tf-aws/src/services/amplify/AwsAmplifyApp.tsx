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
  name: resolvableValue(z.string()),
  access_token: resolvableValue(z.string().optional()),
  auto_branch_creation_config: resolvableValue(
    z.object({
      basic_auth_credentials: z.string().optional(),
      build_spec: z.string().optional(),
      enable_auto_build: z.boolean().optional(),
      enable_basic_auth: z.boolean().optional(),
      enable_performance_mode: z.boolean().optional(),
      enable_pull_request_preview: z.boolean().optional(),
      environment_variables: z.record(z.string(), z.string()).optional(),
      framework: z.string().optional(),
      pull_request_environment_name: z.string().optional(),
      stage: z.string().optional(),
    }).optional(),
  ),
  auto_branch_creation_patterns: resolvableValue(z.string().array().optional()),
  basic_auth_credentials: resolvableValue(z.string().optional()),
  build_spec: resolvableValue(z.string().optional()),
  cache_config: resolvableValue(
    z.object({
      type: z.string(),
    }).optional(),
  ),
  compute_role_arn: resolvableValue(z.string().optional()),
  custom_headers: resolvableValue(z.string().optional()),
  custom_rule: resolvableValue(
    z.object({
      condition: z.string().optional(),
      source: z.string(),
      status: z.string().optional(),
      target: z.string(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  enable_auto_branch_creation: resolvableValue(z.boolean().optional()),
  enable_basic_auth: resolvableValue(z.boolean().optional()),
  enable_branch_auto_build: resolvableValue(z.boolean().optional()),
  enable_branch_auto_deletion: resolvableValue(z.boolean().optional()),
  environment_variables: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  iam_service_role_arn: resolvableValue(z.string().optional()),
  job_config: resolvableValue(
    z.object({
      build_compute_type: z.string().optional(),
    }).optional(),
  ),
  oauth_token: resolvableValue(z.string().optional()),
  platform: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  repository: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  default_domain: z.string().optional(),
  id: z.string().optional(),
  production_branch: z.object({
    branch_name: z.string(),
    last_deploy_time: z.string(),
    status: z.string(),
    thumbnail_url: z.string(),
  }).array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/amplify_app

export function AwsAmplifyApp(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_amplify_app'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAmplifyApp = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsAmplifyApp, idFilter, baseNode, optional)

export const useAwsAmplifyApps = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsAmplifyApp, idFilter, baseNode, optional)
