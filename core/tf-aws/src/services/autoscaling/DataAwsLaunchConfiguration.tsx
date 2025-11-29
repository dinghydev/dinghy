import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLaunchConfiguration } from './AwsLaunchConfiguration.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/launch_configuration

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  associate_public_ip_address: z.boolean().optional(),
  ebs_block_device: z.object({
    delete_on_termination: z.boolean(),
    device_name: z.string(),
    encrypted: z.boolean(),
    iops: z.number(),
    no_device: z.boolean(),
    snapshot_id: z.string(),
    throughput: z.number(),
    volume_size: z.number(),
    volume_type: z.string(),
  }).array().optional(),
  ebs_optimized: z.boolean().optional(),
  enable_monitoring: z.boolean().optional(),
  ephemeral_block_device: z.object({
    device_name: z.string(),
    virtual_name: z.string(),
  }).array().optional(),
  iam_instance_profile: z.string().optional(),
  id: z.string().optional(),
  image_id: z.string().optional(),
  instance_type: z.string().optional(),
  key_name: z.string().optional(),
  metadata_options: z.object({
    http_endpoint: z.string(),
    http_put_response_hop_limit: z.number(),
    http_tokens: z.string(),
  }).array().optional(),
  name: z.string().optional(),
  placement_tenancy: z.string().optional(),
  root_block_device: z.object({
    delete_on_termination: z.boolean(),
    encrypted: z.boolean(),
    iops: z.number(),
    throughput: z.number(),
    volume_size: z.number(),
    volume_type: z.string(),
  }).array().optional(),
  security_groups: z.string().array().optional(),
  spot_price: z.string().optional(),
  user_data: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLaunchConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLaunchConfiguration
      _type='aws_launch_configuration'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLaunchConfiguration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLaunchConfiguration, node, id)

export const useDataAwsLaunchConfigurations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLaunchConfiguration, node, id)
