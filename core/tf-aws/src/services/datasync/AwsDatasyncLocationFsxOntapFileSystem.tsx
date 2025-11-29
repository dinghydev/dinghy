import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datasync_location_fsx_ontap_file_system

export const InputSchema = z.object({
  creation_time: resolvableValue(z.string()),
  security_group_arns: resolvableValue(z.string().array()),
  storage_virtual_machine_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
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
    }).optional(),
  })),
  region: resolvableValue(z.string().optional()),
  subdirectory: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  fsx_filesystem_arn: z.string().optional(),
  uri: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDatasyncLocationFsxOntapFileSystem(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_fsx_ontap_file_system'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationFsxOntapFileSystem = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsDatasyncLocationFsxOntapFileSystem, node, id)

export const useAwsDatasyncLocationFsxOntapFileSystems = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsDatasyncLocationFsxOntapFileSystem, node, id)
