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

export const AwsDatasyncLocationFsxOpenzfsFileSystemInputSchema = TfMetaSchema
  .extend({
    fsx_filesystem_arn: resolvableValue(z.string()),
    protocol: resolvableValue(z.object({
      nfs: z.object({
        mount_options: z.object({
          version: z.string().optional(),
        }),
      }),
    })),
    security_group_arns: resolvableValue(z.string().array()),
    region: resolvableValue(z.string().optional()),
    subdirectory: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsDatasyncLocationFsxOpenzfsFileSystemOutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uri: z.string().optional(),
})

export type AwsDatasyncLocationFsxOpenzfsFileSystemInputProps =
  & z.input<typeof AwsDatasyncLocationFsxOpenzfsFileSystemInputSchema>
  & NodeProps

export type AwsDatasyncLocationFsxOpenzfsFileSystemOutputProps =
  & z.output<typeof AwsDatasyncLocationFsxOpenzfsFileSystemOutputSchema>
  & z.output<typeof AwsDatasyncLocationFsxOpenzfsFileSystemInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datasync_location_fsx_openzfs_file_system

export function AwsDatasyncLocationFsxOpenzfsFileSystem(
  props: Partial<AwsDatasyncLocationFsxOpenzfsFileSystemInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_fsx_openzfs_file_system'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatasyncLocationFsxOpenzfsFileSystemInputSchema}
      _outputSchema={AwsDatasyncLocationFsxOpenzfsFileSystemOutputSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationFsxOpenzfsFileSystem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatasyncLocationFsxOpenzfsFileSystemOutputProps>(
    AwsDatasyncLocationFsxOpenzfsFileSystem,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatasyncLocationFsxOpenzfsFileSystems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatasyncLocationFsxOpenzfsFileSystemOutputProps>(
    AwsDatasyncLocationFsxOpenzfsFileSystem,
    idFilter,
    baseNode,
    optional,
  )
