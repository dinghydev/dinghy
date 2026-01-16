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

export const InputSchema = TfMetaSchema.extend({
  association_id: resolvableValue(z.string()),
  data_repository_path: resolvableValue(z.string()),
  file_system_id: resolvableValue(z.string()),
  file_system_path: resolvableValue(z.string()),
  batch_import_meta_data_on_create: resolvableValue(z.boolean().optional()),
  delete_data_in_filesystem: resolvableValue(z.boolean().optional()),
  imported_file_chunk_size: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  s3: resolvableValue(
    z.object({
      auto_export_policy: z.object({
        events: z.string().array().optional(),
      }).optional(),
      auto_import_policy: z.object({
        events: z.string().array().optional(),
      }).optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/fsx_data_repository_association

export function AwsFsxDataRepositoryAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_data_repository_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFsxDataRepositoryAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsFsxDataRepositoryAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFsxDataRepositoryAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsFsxDataRepositoryAssociation,
    idFilter,
    baseNode,
    optional,
  )
