import {
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  output_path: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  exclude_symlink_directories: resolvableValue(z.boolean().optional()),
  excludes: resolvableValue(z.string().array().optional()),
  output_file_mode: resolvableValue(z.string().optional()),
  source: resolvableValue(
    z.object({
      content: z.string(),
      filename: z.string(),
    }).array().optional(),
  ),
  source_content: resolvableValue(z.string().optional()),
  source_content_filename: resolvableValue(z.string().optional()),
  source_dir: resolvableValue(z.string().optional()),
  source_file: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  output_base64sha256: z.string().optional(),
  output_base64sha512: z.string().optional(),
  output_md5: z.string().optional(),
  output_sha: z.string().optional(),
  output_sha256: z.string().optional(),
  output_sha512: z.string().optional(),
  output_size: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

// https://registry.terraform.io/providers/hashicorp/archive/latest/docs/resources/file

export function ArchiveFile(props: Partial<InputProps>) {
  return (
    <Shape
      _type='archive_file'
      _category='resource'
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useArchiveFile = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(ArchiveFile, node, id)

export const useArchiveFiles = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(ArchiveFile, node, id)
