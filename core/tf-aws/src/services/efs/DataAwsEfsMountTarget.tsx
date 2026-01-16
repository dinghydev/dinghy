import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEfsMountTarget } from './AwsEfsMountTarget.tsx'

export const InputSchema = TfMetaSchema.extend({
  access_point_id: resolvableValue(z.string().optional()),
  file_system_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  mount_target_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  availability_zone_id: z.string().optional(),
  availability_zone_name: z.string().optional(),
  dns_name: z.string().optional(),
  file_system_arn: z.string().optional(),
  ip_address: z.string().optional(),
  ip_address_type: z.string().optional(),
  ipv6_address: z.string().optional(),
  mount_target_dns_name: z.string().optional(),
  network_interface_id: z.string().optional(),
  owner_id: z.string().optional(),
  security_groups: z.set(z.string()).optional(),
  subnet_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/efs_mount_target

export function DataAwsEfsMountTarget(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEfsMountTarget
      _type='aws_efs_mount_target'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEfsMountTarget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsEfsMountTarget, idFilter, baseNode, optional)

export const useDataAwsEfsMountTargets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsEfsMountTarget,
    idFilter,
    baseNode,
    optional,
  )
