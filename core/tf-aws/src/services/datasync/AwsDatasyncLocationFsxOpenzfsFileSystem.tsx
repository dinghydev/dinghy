import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datasync_location_fsx_openzfs_file_system

export const InputSchema = z.object({
  fsx_filesystem_arn: resolvableValue(z.string()),
  security_group_arns: resolvableValue(z.string().array()),
  protocol: resolvableValue(z.object({
    nfs: z.object({
      mount_options: z.object({
        version: z.string().optional(),
      }),
    }),
  })),
  region: resolvableValue(z.string().optional()),
  subdirectory: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uri: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDatasyncLocationFsxOpenzfsFileSystem(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_fsx_openzfs_file_system'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationFsxOpenzfsFileSystem = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsDatasyncLocationFsxOpenzfsFileSystem, node, id)

export const useAwsDatasyncLocationFsxOpenzfsFileSystems = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsDatasyncLocationFsxOpenzfsFileSystem, node, id)
