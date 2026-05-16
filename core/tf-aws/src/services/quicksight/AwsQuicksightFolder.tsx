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

export const AwsQuicksightFolderInputSchema = TfMetaSchema.extend({
  folder_id: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  folder_type: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  parent_folder_arn: resolvableValue(z.string().optional()),
  permissions: resolvableValue(
    z.object({
      actions: z.string().array(),
      principal: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsQuicksightFolderOutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  folder_path: z.string().array().optional(),
  id: z.string().optional(),
  last_updated_time: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsQuicksightFolderInputProps =
  & z.input<typeof AwsQuicksightFolderInputSchema>
  & NodeProps

export type AwsQuicksightFolderOutputProps =
  & z.output<typeof AwsQuicksightFolderOutputSchema>
  & z.output<typeof AwsQuicksightFolderInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_folder

export function AwsQuicksightFolder(
  props: Partial<AwsQuicksightFolderInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_folder'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightFolderInputSchema}
      _outputSchema={AwsQuicksightFolderOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightFolder = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightFolderOutputProps>(
    AwsQuicksightFolder,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightFolders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightFolderOutputProps>(
    AwsQuicksightFolder,
    idFilter,
    baseNode,
    optional,
  )
