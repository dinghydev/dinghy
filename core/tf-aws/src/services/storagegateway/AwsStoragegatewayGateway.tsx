import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/storagegateway_gateway

export const InputSchema = z.object({
  gateway_name: resolvableValue(z.string()),
  gateway_timezone: resolvableValue(z.string()),
  activation_key: resolvableValue(z.string().optional()),
  average_download_rate_limit_in_bits_per_sec: resolvableValue(
    z.number().optional(),
  ),
  average_upload_rate_limit_in_bits_per_sec: resolvableValue(
    z.number().optional(),
  ),
  cloudwatch_log_group_arn: resolvableValue(z.string().optional()),
  gateway_ip_address: resolvableValue(z.string().optional()),
  gateway_type: resolvableValue(z.string().optional()),
  gateway_vpc_endpoint: resolvableValue(z.string().optional()),
  maintenance_start_time: resolvableValue(
    z.object({
      day_of_month: z.string().optional(),
      day_of_week: z.string().optional(),
      hour_of_day: z.number(),
      minute_of_hour: z.number().optional(),
    }).optional(),
  ),
  medium_changer_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  smb_active_directory_settings: resolvableValue(
    z.object({
      active_directory_status: z.string(),
      domain_controllers: z.string().array().optional(),
      domain_name: z.string(),
      organizational_unit: z.string().optional(),
      password: z.string(),
      timeout_in_seconds: z.number().optional(),
      username: z.string(),
    }).optional(),
  ),
  smb_file_share_visibility: resolvableValue(z.boolean().optional()),
  smb_guest_password: resolvableValue(z.string().optional()),
  smb_security_strategy: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tape_drive_type: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  ec2_instance_id: z.string().optional(),
  endpoint_type: z.string().optional(),
  gateway_id: z.string().optional(),
  gateway_network_interface: z.object({
    ipv4_address: z.string(),
  }).array().optional(),
  host_environment: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsStoragegatewayGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayGateway = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsStoragegatewayGateway, node, id)

export const useAwsStoragegatewayGateways = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsStoragegatewayGateway, node, id)
