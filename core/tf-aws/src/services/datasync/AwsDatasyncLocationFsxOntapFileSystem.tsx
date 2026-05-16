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

export const AwsDatasyncLocationFsxOntapFileSystemInputSchema = TfMetaSchema
  .extend({
    protocol: resolvableValue(z.object({
      nfs: z.object({
        mount_options: z.object({
          version: z.string().optional(),
        }),
      }).optional(),
      smb: z.object({
        domain: z.string().optional(),
        password: z.string(),
        user: z.string(),
        mount_options: z.object({
          version: z.string().optional(),
        }),
      }).optional(),
    })),
    security_group_arns: resolvableValue(z.string().array()),
    storage_virtual_machine_arn: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    subdirectory: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsDatasyncLocationFsxOntapFileSystemOutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  fsx_filesystem_arn: z.string().optional(),
  uri: z.string().optional(),
})

export type AwsDatasyncLocationFsxOntapFileSystemInputProps =
  & z.input<typeof AwsDatasyncLocationFsxOntapFileSystemInputSchema>
  & NodeProps

export type AwsDatasyncLocationFsxOntapFileSystemOutputProps =
  & z.output<typeof AwsDatasyncLocationFsxOntapFileSystemOutputSchema>
  & z.output<typeof AwsDatasyncLocationFsxOntapFileSystemInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datasync_location_fsx_ontap_file_system

export function AwsDatasyncLocationFsxOntapFileSystem(
  props: Partial<AwsDatasyncLocationFsxOntapFileSystemInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_fsx_ontap_file_system'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatasyncLocationFsxOntapFileSystemInputSchema}
      _outputSchema={AwsDatasyncLocationFsxOntapFileSystemOutputSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationFsxOntapFileSystem = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatasyncLocationFsxOntapFileSystemOutputProps>(
    AwsDatasyncLocationFsxOntapFileSystem,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatasyncLocationFsxOntapFileSystems = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatasyncLocationFsxOntapFileSystemOutputProps>(
    AwsDatasyncLocationFsxOntapFileSystem,
    idFilter,
    baseNode,
    optional,
  )
