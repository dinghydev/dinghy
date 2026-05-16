import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEbsVolume } from './AwsEbsVolume.tsx'

export const DataAwsEbsVolumeInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  most_recent: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsEbsVolumeOutputSchema = z.object({
  arn: z.string().optional(),
  availability_zone: z.string().optional(),
  create_time: z.string().optional(),
  encrypted: z.boolean().optional(),
  id: z.string().optional(),
  iops: z.number().optional(),
  kms_key_id: z.string().optional(),
  multi_attach_enabled: z.boolean().optional(),
  outpost_arn: z.string().optional(),
  size: z.number().optional(),
  snapshot_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  throughput: z.number().optional(),
  volume_id: z.string().optional(),
  volume_initialization_rate: z.number().optional(),
  volume_type: z.string().optional(),
})

export type DataAwsEbsVolumeInputProps =
  & z.input<typeof DataAwsEbsVolumeInputSchema>
  & NodeProps

export type DataAwsEbsVolumeOutputProps =
  & z.output<typeof DataAwsEbsVolumeOutputSchema>
  & z.output<typeof DataAwsEbsVolumeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ebs_volume

export function DataAwsEbsVolume(props: Partial<DataAwsEbsVolumeInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEbsVolume
      _type='aws_ebs_volume'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEbsVolumeInputSchema}
      _outputSchema={DataAwsEbsVolumeOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEbsVolume = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEbsVolumeOutputProps>(
    DataAwsEbsVolume,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEbsVolumes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEbsVolumeOutputProps>(
    DataAwsEbsVolume,
    idFilter,
    baseNode,
    optional,
  )
