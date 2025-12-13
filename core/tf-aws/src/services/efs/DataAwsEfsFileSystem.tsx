import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEfsFileSystem } from './AwsEfsFileSystem.tsx'

export const InputSchema = z.object({
  protection: resolvableValue(
    z.object({
      replication_overwrite: z.string(),
    }).array(),
  ),
  creation_token: resolvableValue(z.string().optional()),
  file_system_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  availability_zone_id: z.string().optional(),
  availability_zone_name: z.string().optional(),
  dns_name: z.string().optional(),
  encrypted: z.boolean().optional(),
  kms_key_id: z.string().optional(),
  lifecycle_policy: z.object({
    transition_to_archive: z.string(),
    transition_to_ia: z.string(),
    transition_to_primary_storage_class: z.string(),
  }).array().optional(),
  name: z.string().optional(),
  performance_mode: z.string().optional(),
  provisioned_throughput_in_mibps: z.number().optional(),
  size_in_bytes: z.number().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  throughput_mode: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/efs_file_system

export function DataAwsEfsFileSystem(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEfsFileSystem
      _type='aws_efs_file_system'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEfsFileSystem = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsEfsFileSystem, idFilter, baseNode)

export const useDataAwsEfsFileSystems = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(DataAwsEfsFileSystem, idFilter, baseNode)
