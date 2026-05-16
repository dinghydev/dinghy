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

export const AwsEcsExpressGatewayServiceInputSchema = TfMetaSchema.extend({
  execution_role_arn: resolvableValue(z.string()),
  infrastructure_role_arn: resolvableValue(z.string()),
  cluster: resolvableValue(z.string().optional()),
  cpu: resolvableValue(z.string().optional()),
  health_check_path: resolvableValue(z.string().optional()),
  memory: resolvableValue(z.string().optional()),
  network_configuration: resolvableValue(
    z.object({
      security_groups: z.string().array(),
      subnets: z.string().array(),
    }).array().optional(),
  ),
  primary_container: resolvableValue(
    z.object({
      aws_logs_configuration: z.object({
        log_group: z.string(),
        log_stream_prefix: z.string(),
      }).array().optional(),
      command: z.string().array().optional(),
      container_port: z.number().optional(),
      image: z.string(),
      environment: z.object({
        name: z.string(),
        value: z.string(),
      }).array().optional(),
      repository_credentials: z.object({
        credentials_parameter: z.string(),
      }).array().optional(),
      secret: z.object({
        name: z.string(),
        value_from: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  scaling_target: resolvableValue(
    z.object({
      auto_scaling_metric: z.string(),
      auto_scaling_target_value: z.number(),
      max_task_count: z.number(),
      min_task_count: z.number(),
    }).array().optional(),
  ),
  service_name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  task_role_arn: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  wait_for_steady_state: resolvableValue(z.boolean().optional()),
})

export const AwsEcsExpressGatewayServiceOutputSchema = z.object({
  current_deployment: z.string().optional(),
  ingress_paths: z.object({
    access_type: z.string(),
    endpoint: z.string(),
  }).array().optional(),
  service_arn: z.string().optional(),
  service_revision_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEcsExpressGatewayServiceInputProps =
  & z.input<typeof AwsEcsExpressGatewayServiceInputSchema>
  & NodeProps

export type AwsEcsExpressGatewayServiceOutputProps =
  & z.output<typeof AwsEcsExpressGatewayServiceOutputSchema>
  & z.output<typeof AwsEcsExpressGatewayServiceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecs_express_gateway_service

export function AwsEcsExpressGatewayService(
  props: Partial<AwsEcsExpressGatewayServiceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_express_gateway_service'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcsExpressGatewayServiceInputSchema}
      _outputSchema={AwsEcsExpressGatewayServiceOutputSchema}
      {...props}
    />
  )
}

export const useAwsEcsExpressGatewayService = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcsExpressGatewayServiceOutputProps>(
    AwsEcsExpressGatewayService,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcsExpressGatewayServices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcsExpressGatewayServiceOutputProps>(
    AwsEcsExpressGatewayService,
    idFilter,
    baseNode,
    optional,
  )
