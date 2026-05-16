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

export const DataAwsS3filesMountTargetInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsS3filesMountTargetOutputSchema = z.object({
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

export type DataAwsS3filesMountTargetInputProps =
  & z.input<typeof DataAwsS3filesMountTargetInputSchema>
  & NodeProps

export type DataAwsS3filesMountTargetOutputProps =
  & z.output<typeof DataAwsS3filesMountTargetOutputSchema>
  & z.output<typeof DataAwsS3filesMountTargetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3files_mount_target

export function DataAwsS3filesMountTarget(
  props: Partial<DataAwsS3filesMountTargetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsS3filesMountTarget
      _type='aws_s3files_mount_target'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsS3filesMountTargetInputSchema}
      _outputSchema={DataAwsS3filesMountTargetOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3filesMountTarget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsS3filesMountTargetOutputProps>(
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
  useTypedNodes<DataAwsS3filesMountTargetOutputProps>(
    DataAwsS3filesMountTarget,
    idFilter,
    baseNode,
    optional,
  )
