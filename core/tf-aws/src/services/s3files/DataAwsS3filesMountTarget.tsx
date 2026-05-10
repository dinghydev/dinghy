import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3filesMountTarget } from './AwsS3filesMountTarget.tsx'

export const InputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  availability_zone_id: z.string().optional(),
  file_system_id: z.string().optional(),
  ipv4_address: z.string().optional(),
  ipv6_address: z.string().optional(),
  network_interface_id: z.string().optional(),
  owner_id: z.string().optional(),
  security_groups: z.set(z.string()).optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
  subnet_id: z.string().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3files_mount_target

export function DataAwsS3filesMountTarget(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsS3filesMountTarget
      _type='aws_s3files_mount_target'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3filesMountTarget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsS3filesMountTarget,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsS3filesMountTargets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsS3filesMountTarget,
    idFilter,
    baseNode,
    optional,
  )
