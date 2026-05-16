import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3filesFileSystem } from './AwsS3filesFileSystem.tsx'

export const DataAwsS3filesFileSystemInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsS3filesFileSystemOutputSchema = z.object({
  arn: z.string().optional(),
  bucket: z.string().optional(),
  creation_time: z.string().optional(),
  kms_key_id: z.string().optional(),
  name: z.string().optional(),
  owner_id: z.string().optional(),
  prefix: z.string().optional(),
  role_arn: z.string().optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsS3filesFileSystemInputProps =
  & z.input<typeof DataAwsS3filesFileSystemInputSchema>
  & NodeProps

export type DataAwsS3filesFileSystemOutputProps =
  & z.output<typeof DataAwsS3filesFileSystemOutputSchema>
  & z.output<typeof DataAwsS3filesFileSystemInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3files_file_system

export function DataAwsS3filesFileSystem(
  props: Partial<DataAwsS3filesFileSystemInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsS3filesFileSystem
      _type='aws_s3files_file_system'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsS3filesFileSystemInputSchema}
      _outputSchema={DataAwsS3filesFileSystemOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3filesFileSystem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsS3filesFileSystemOutputProps>(
    DataAwsS3filesFileSystem,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsS3filesFileSystems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsS3filesFileSystemOutputProps>(
    DataAwsS3filesFileSystem,
    idFilter,
    baseNode,
    optional,
  )
