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
  availability_zone_name: resolvableValue(z.string().optional()),
  creation_token: resolvableValue(z.string().optional()),
  encrypted: resolvableValue(z.boolean().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  lifecycle_policy: resolvableValue(
    z.object({
      transition_to_archive: z.string().optional(),
      transition_to_ia: z.string().optional(),
      transition_to_primary_storage_class: z.string().optional(),
    }).array().optional(),
  ),
  performance_mode: resolvableValue(z.string().optional()),
  protection: resolvableValue(
    z.object({
      replication_overwrite: z.string().optional(),
    }).optional(),
  ),
  provisioned_throughput_in_mibps: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  throughput_mode: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  availability_zone_id: z.string().optional(),
  dns_name: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  number_of_mount_targets: z.number().optional(),
  owner_id: z.string().optional(),
  size_in_bytes: z.object({
    value: z.number(),
    value_in_ia: z.number(),
    value_in_standard: z.number(),
  }).array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/efs_file_system

export function AwsEfsFileSystem(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_efs_file_system'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEfsFileSystem = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsEfsFileSystem, idFilter, baseNode)

export const useAwsEfsFileSystems = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsEfsFileSystem, idFilter, baseNode)
