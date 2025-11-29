import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/apprunner_service

export const InputSchema = z.object({
  service_name: resolvableValue(z.string()),
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
    }).optional(),
  ),
  observability_configuration: resolvableValue(
    z.object({
      observability_configuration_arn: z.string().optional(),
      observability_enabled: z.boolean(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  source_configuration: resolvableValue(z.object({
    auto_deployments_enabled: z.boolean().optional(),
  })),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

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

export function AwsApprunnerService(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsApprunnerService = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApprunnerService, node, id)

export const useAwsApprunnerServices = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsApprunnerService, node, id)
