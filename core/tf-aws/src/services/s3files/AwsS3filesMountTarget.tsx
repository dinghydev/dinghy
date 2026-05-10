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
  file_system_id: resolvableValue(z.string()),
  subnet_id: resolvableValue(z.string()),
  ip_address_type: resolvableValue(z.string().optional()),
  ipv4_address: resolvableValue(z.string().optional()),
  ipv6_address: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_groups: resolvableValue(z.string().array().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  availability_zone_id: z.string().optional(),
  id: z.string().optional(),
  network_interface_id: z.string().optional(),
  owner_id: z.string().optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
  vpc_id: z.string().optional(),
})

export const ImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_mount_target

export function AwsS3filesMountTarget(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3files_mount_target'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsS3filesMountTarget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsS3filesMountTarget, idFilter, baseNode, optional)

export const useAwsS3filesMountTargets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsS3filesMountTarget,
    idFilter,
    baseNode,
    optional,
  )
