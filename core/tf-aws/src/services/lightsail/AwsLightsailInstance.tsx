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
  availability_zone: resolvableValue(z.string()),
  blueprint_id: resolvableValue(z.string()),
  bundle_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  add_on: resolvableValue(
    z.object({
      snapshot_time: z.string(),
      status: z.string(),
      type: z.string(),
    }).optional(),
  ),
  ip_address_type: resolvableValue(z.string().optional()),
  key_pair_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  user_data: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cpu_count: z.number().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  ipv6_addresses: z.string().array().optional(),
  is_static_ip: z.boolean().optional(),
  private_ip_address: z.string().optional(),
  public_ip_address: z.string().optional(),
  ram_size: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  username: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_instance

export function AwsLightsailInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_instance'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsLightsailInstance, idFilter, baseNode, optional)

export const useAwsLightsailInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsLightsailInstance, idFilter, baseNode, optional)
