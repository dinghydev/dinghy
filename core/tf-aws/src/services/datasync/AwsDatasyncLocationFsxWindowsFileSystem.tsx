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

export const AwsDatasyncLocationFsxWindowsFileSystemInputSchema = TfMetaSchema
  .extend({
    fsx_filesystem_arn: resolvableValue(z.string()),
    password: resolvableValue(z.string()),
    security_group_arns: resolvableValue(z.string().array()),
    user: resolvableValue(z.string()),
    domain: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    subdirectory: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsDatasyncLocationFsxWindowsFileSystemOutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uri: z.string().optional(),
})

export type AwsDatasyncLocationFsxWindowsFileSystemInputProps =
  & z.input<typeof AwsDatasyncLocationFsxWindowsFileSystemInputSchema>
  & NodeProps

export type AwsDatasyncLocationFsxWindowsFileSystemOutputProps =
  & z.output<typeof AwsDatasyncLocationFsxWindowsFileSystemOutputSchema>
  & z.output<typeof AwsDatasyncLocationFsxWindowsFileSystemInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datasync_location_fsx_windows_file_system

export function AwsDatasyncLocationFsxWindowsFileSystem(
  props: Partial<AwsDatasyncLocationFsxWindowsFileSystemInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_fsx_windows_file_system'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatasyncLocationFsxWindowsFileSystemInputSchema}
      _outputSchema={AwsDatasyncLocationFsxWindowsFileSystemOutputSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationFsxWindowsFileSystem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatasyncLocationFsxWindowsFileSystemOutputProps>(
    AwsDatasyncLocationFsxWindowsFileSystem,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatasyncLocationFsxWindowsFileSystems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatasyncLocationFsxWindowsFileSystemOutputProps>(
    AwsDatasyncLocationFsxWindowsFileSystem,
    idFilter,
    baseNode,
    optional,
  )
