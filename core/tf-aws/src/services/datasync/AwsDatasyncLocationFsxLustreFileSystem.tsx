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

export const AwsDatasyncLocationFsxLustreFileSystemInputSchema = TfMetaSchema
  .extend({
    fsx_filesystem_arn: resolvableValue(z.string()),
    security_group_arns: resolvableValue(z.string().array()),
    region: resolvableValue(z.string().optional()),
    subdirectory: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsDatasyncLocationFsxLustreFileSystemOutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uri: z.string().optional(),
})

export type AwsDatasyncLocationFsxLustreFileSystemInputProps =
  & z.input<typeof AwsDatasyncLocationFsxLustreFileSystemInputSchema>
  & NodeProps

export type AwsDatasyncLocationFsxLustreFileSystemOutputProps =
  & z.output<typeof AwsDatasyncLocationFsxLustreFileSystemOutputSchema>
  & z.output<typeof AwsDatasyncLocationFsxLustreFileSystemInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datasync_location_fsx_lustre_file_system

export function AwsDatasyncLocationFsxLustreFileSystem(
  props: Partial<AwsDatasyncLocationFsxLustreFileSystemInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_fsx_lustre_file_system'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatasyncLocationFsxLustreFileSystemInputSchema}
      _outputSchema={AwsDatasyncLocationFsxLustreFileSystemOutputSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationFsxLustreFileSystem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatasyncLocationFsxLustreFileSystemOutputProps>(
    AwsDatasyncLocationFsxLustreFileSystem,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatasyncLocationFsxLustreFileSystems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatasyncLocationFsxLustreFileSystemOutputProps>(
    AwsDatasyncLocationFsxLustreFileSystem,
    idFilter,
    baseNode,
    optional,
  )
