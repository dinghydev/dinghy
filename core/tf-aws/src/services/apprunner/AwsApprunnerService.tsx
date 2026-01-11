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
  service_name: resolvableValue(z.string()),
  source_configuration: resolvableValue(z.object({
    auto_deployments_enabled: z.boolean().optional(),
    authentication_configuration: z.object({
      access_role_arn: z.string().optional(),
      connection_arn: z.string().optional(),
    }).optional(),
    code_repository: z.object({
      repository_url: z.string(),
      source_directory: z.string().optional(),
      code_configuration: z.object({
        configuration_source: z.string(),
        code_configuration_values: z.object({
          build_command: z.string().optional(),
          port: z.string().optional(),
          runtime: z.string(),
          runtime_environment_secrets: z.record(z.string(), z.string())
            .optional(),
          runtime_environment_variables: z.record(z.string(), z.string())
            .optional(),
          start_command: z.string().optional(),
        }).optional(),
      }).optional(),
      source_code_version: z.object({
        type: z.string(),
        value: z.string(),
      }),
    }).optional(),
    image_repository: z.object({
      image_identifier: z.string(),
      image_repository_type: z.string(),
      image_configuration: z.object({
        port: z.string().optional(),
        runtime_environment_secrets: z.record(z.string(), z.string())
          .optional(),
        runtime_environment_variables: z.record(z.string(), z.string())
          .optional(),
        start_command: z.string().optional(),
      }).optional(),
    }).optional(),
  })),
  auto_scaling_configuration_arn: resolvableValue(z.string().optional()),
  encryption_configuration: resolvableValue(
    z.object({
      kms_key: z.string(),
    }).optional(),
  ),
  health_check_configuration: resolvableValue(
    z.object({
      healthy_threshold: z.number().optional(),
      interval: z.number().optional(),
      path: z.string().optional(),
      protocol: z.string().optional(),
      timeout: z.number().optional(),
      unhealthy_threshold: z.number().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  instance_configuration: resolvableValue(
    z.object({
      cpu: z.string().optional(),
      instance_role_arn: z.string().optional(),
      memory: z.string().optional(),
    }).optional(),
  ),
  network_configuration: resolvableValue(
    z.object({
      ip_address_type: z.string().optional(),
      egress_configuration: z.object({
        egress_type: z.string().optional(),
        vpc_connector_arn: z.string().optional(),
      }).optional(),
      ingress_configuration: z.object({
        is_publicly_accessible: z.boolean().optional(),
      }).optional(),
    }).optional(),
  ),
  observability_configuration: resolvableValue(
    z.object({
      observability_configuration_arn: z.string().optional(),
      observability_enabled: z.boolean(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  service_id: z.string().optional(),
  service_url: z.string().optional(),
  status: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/apprunner_service

export function AwsApprunnerService(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apprunner_service'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsApprunnerService = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsApprunnerService, idFilter, baseNode, optional)

export const useAwsApprunnerServices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsApprunnerService, idFilter, baseNode, optional)
