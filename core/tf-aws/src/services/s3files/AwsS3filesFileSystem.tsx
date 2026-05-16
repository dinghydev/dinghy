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

export const AwsS3filesFileSystemInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  accept_bucket_warning: resolvableValue(z.boolean().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsS3filesFileSystemOutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  owner_id: z.string().optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsS3filesFileSystemImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3filesFileSystemInputProps =
  & z.input<typeof AwsS3filesFileSystemInputSchema>
  & z.input<typeof AwsS3filesFileSystemImportSchema>
  & NodeProps

export type AwsS3filesFileSystemOutputProps =
  & z.output<typeof AwsS3filesFileSystemOutputSchema>
  & z.output<typeof AwsS3filesFileSystemInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_file_system

export function AwsS3filesFileSystem(
  props: Partial<AwsS3filesFileSystemInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3files_file_system'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3filesFileSystemInputSchema}
      _outputSchema={AwsS3filesFileSystemOutputSchema}
      _importSchema={AwsS3filesFileSystemImportSchema}
      {...props}
    />
  )
}

export const useAwsS3filesFileSystem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3filesFileSystemOutputProps>(
    AwsS3filesFileSystem,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3filesFileSystems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3filesFileSystemOutputProps>(
    AwsS3filesFileSystem,
    idFilter,
    baseNode,
    optional,
  )
