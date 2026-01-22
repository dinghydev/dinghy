import {
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
  filename: resolvableValue(z.string()),
  content: resolvableValue(z.string().optional()),
  content_base64: resolvableValue(z.string().optional()),
  directory_permission: resolvableValue(z.string().optional()),
  file_permission: resolvableValue(z.string().optional()),
  sensitive_content: resolvableValue(z.string().optional()),
  source: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  content_base64sha256: z.string().optional(),
  content_base64sha512: z.string().optional(),
  content_md5: z.string().optional(),
  content_sha1: z.string().optional(),
  content_sha256: z.string().optional(),
  content_sha512: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

// https://registry.terraform.io/providers/hashicorp/local/latest/docs/resources/file

export function LocalFile(props: Partial<InputProps>) {
  return (
    <Shape
      _type='local_file'
      _category={['resource', 'terraform']}
      _terraform={{
        required_providers: {
          local: {
            source: 'local',
            version: '2.6.1',
          },
        },
      }}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useLocalFile = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(LocalFile, idFilter, baseNode)

export const useLocalFiles = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(LocalFile, idFilter, baseNode)
