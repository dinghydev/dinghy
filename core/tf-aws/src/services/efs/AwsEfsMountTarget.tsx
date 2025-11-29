import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/efs_mount_target

export const InputSchema = z.object({
  file_system_id: resolvableValue(z.string()),
  subnet_id: resolvableValue(z.string()),
  ip_address: resolvableValue(z.string().optional()),
  ip_address_type: resolvableValue(z.string().optional()),
  ipv6_address: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_groups: resolvableValue(z.string().array().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  availability_zone_id: z.string().optional(),
  availability_zone_name: z.string().optional(),
  dns_name: z.string().optional(),
  file_system_arn: z.string().optional(),
  id: z.string().optional(),
  mount_target_dns_name: z.string().optional(),
  network_interface_id: z.string().optional(),
  owner_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEfsMountTarget(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_efs_mount_target'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEfsMountTarget = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEfsMountTarget, node, id)

export const useAwsEfsMountTargets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEfsMountTarget, node, id)
