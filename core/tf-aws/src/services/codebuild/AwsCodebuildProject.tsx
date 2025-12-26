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
  artifacts: resolvableValue(z.object({
    artifact_identifier: z.string().optional(),
    bucket_owner_access: z.string().optional(),
    encryption_disabled: z.boolean().optional(),
    location: z.string().optional(),
    name: z.string().optional(),
    namespace_type: z.string().optional(),
    override_artifact_name: z.boolean().optional(),
    packaging: z.string().optional(),
    path: z.string().optional(),
    type: z.string(),
  })),
  environment: resolvableValue(z.object({
    certificate: z.string().optional(),
    compute_type: z.string(),
    image: z.string(),
    image_pull_credentials_type: z.string().optional(),
    privileged_mode: z.boolean().optional(),
    type: z.string(),
    docker_server: z.object({
      compute_type: z.string(),
      security_group_ids: z.string().array().optional(),
    }).optional(),
    environment_variable: z.object({
      name: z.string(),
      type: z.string().optional(),
      value: z.string(),
    }).array().optional(),
    fleet: z.object({
      fleet_arn: z.string().optional(),
    }).optional(),
    registry_credential: z.object({
      credential: z.string(),
      credential_provider: z.string(),
    }).optional(),
  })),
  name: resolvableValue(z.string()),
  service_role: resolvableValue(z.string()),
  source: resolvableValue(z.object({
    buildspec: z.string().optional(),
    git_clone_depth: z.number().optional(),
    insecure_ssl: z.boolean().optional(),
    location: z.string().optional(),
    report_build_status: z.boolean().optional(),
    type: z.string(),
    auth: z.object({
      resource: z.string(),
      type: z.string(),
    }).optional(),
    build_status_config: z.object({
      context: z.string().optional(),
      target_url: z.string().optional(),
    }).optional(),
    git_submodules_config: z.object({
      fetch_submodules: z.boolean(),
    }).optional(),
  })),
  auto_retry_limit: resolvableValue(z.number().optional()),
  badge_enabled: resolvableValue(z.boolean().optional()),
  build_batch_config: resolvableValue(
    z.object({
      combine_artifacts: z.boolean().optional(),
      service_role: z.string(),
      timeout_in_mins: z.number().optional(),
      restrictions: z.object({
        compute_types_allowed: z.string().array().optional(),
        maximum_builds_allowed: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  build_timeout: resolvableValue(z.number().optional()),
  cache: resolvableValue(
    z.object({
      location: z.string().optional(),
      modes: z.string().array().optional(),
      type: z.string().optional(),
    }).optional(),
  ),
  concurrent_build_limit: resolvableValue(z.number().optional()),
  description: resolvableValue(z.string().optional()),
  encryption_key: resolvableValue(z.string().optional()),
  file_system_locations: resolvableValue(
    z.object({
      identifier: z.string().optional(),
      location: z.string().optional(),
      mount_options: z.string().optional(),
      mount_point: z.string().optional(),
      type: z.string().optional(),
    }).array().optional(),
  ),
  logs_config: resolvableValue(
    z.object({
      cloudwatch_logs: z.object({
        group_name: z.string().optional(),
        status: z.string().optional(),
        stream_name: z.string().optional(),
      }).optional(),
      s3_logs: z.object({
        bucket_owner_access: z.string().optional(),
        encryption_disabled: z.boolean().optional(),
        location: z.string().optional(),
        status: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  project_visibility: resolvableValue(z.string().optional()),
  queued_timeout: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  resource_access_role: resolvableValue(z.string().optional()),
  secondary_artifacts: resolvableValue(
    z.object({
      artifact_identifier: z.string(),
      bucket_owner_access: z.string().optional(),
      encryption_disabled: z.boolean().optional(),
      location: z.string().optional(),
      name: z.string().optional(),
      namespace_type: z.string().optional(),
      override_artifact_name: z.boolean().optional(),
      packaging: z.string().optional(),
      path: z.string().optional(),
      type: z.string(),
    }).array().optional(),
  ),
  secondary_source_version: resolvableValue(
    z.object({
      source_identifier: z.string(),
      source_version: z.string(),
    }).array().optional(),
  ),
  secondary_sources: resolvableValue(
    z.object({
      buildspec: z.string().optional(),
      git_clone_depth: z.number().optional(),
      insecure_ssl: z.boolean().optional(),
      location: z.string().optional(),
      report_build_status: z.boolean().optional(),
      source_identifier: z.string(),
      type: z.string(),
      auth: z.object({
        resource: z.string(),
        type: z.string(),
      }).optional(),
      build_status_config: z.object({
        context: z.string().optional(),
        target_url: z.string().optional(),
      }).optional(),
      git_submodules_config: z.object({
        fetch_submodules: z.boolean(),
      }).optional(),
    }).array().optional(),
  ),
  source_version: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array(),
      subnets: z.string().array(),
      vpc_id: z.string(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  badge_url: z.string().optional(),
  id: z.string().optional(),
  public_project_alias: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codebuild_project

export function AwsCodebuildProject(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codebuild_project'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCodebuildProject = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsCodebuildProject, idFilter, baseNode, optional)

export const useAwsCodebuildProjects = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsCodebuildProject, idFilter, baseNode, optional)
