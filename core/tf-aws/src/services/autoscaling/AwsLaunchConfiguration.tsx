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
  image_id: resolvableValue(z.string()),
  instance_type: resolvableValue(z.string()),
  associate_public_ip_address: resolvableValue(z.boolean().optional()),
  ebs_block_device: resolvableValue(
    z.object({
      delete_on_termination: z.boolean().optional(),
      device_name: z.string(),
      encrypted: z.boolean().optional(),
      iops: z.number().optional(),
      no_device: z.boolean().optional(),
      snapshot_id: z.string().optional(),
      throughput: z.number().optional(),
      volume_size: z.number().optional(),
      volume_type: z.string().optional(),
    }).array().optional(),
  ),
  ebs_optimized: resolvableValue(z.boolean().optional()),
  enable_monitoring: resolvableValue(z.boolean().optional()),
  ephemeral_block_device: resolvableValue(
    z.object({
      device_name: z.string(),
      no_device: z.boolean().optional(),
      virtual_name: z.string().optional(),
    }).array().optional(),
  ),
  iam_instance_profile: resolvableValue(z.string().optional()),
  key_name: resolvableValue(z.string().optional()),
  metadata_options: resolvableValue(
    z.object({
      http_endpoint: z.string().optional(),
      http_put_response_hop_limit: z.number().optional(),
      http_tokens: z.string().optional(),
    }).optional(),
  ),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  placement_tenancy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  root_block_device: resolvableValue(
    z.object({
      delete_on_termination: z.boolean().optional(),
      encrypted: z.boolean().optional(),
      iops: z.number().optional(),
      throughput: z.number().optional(),
      volume_size: z.number().optional(),
      volume_type: z.string().optional(),
    }).optional(),
  ),
  security_groups: resolvableValue(z.string().array().optional()),
  spot_price: resolvableValue(z.string().optional()),
  user_data: resolvableValue(z.string().optional()),
  user_data_base64: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/launch_configuration

export function AwsLaunchConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_launch_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLaunchConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsLaunchConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLaunchConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsLaunchConfiguration,
    idFilter,
    baseNode,
    optional,
  )
