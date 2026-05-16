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

export const AwsFsxBackupInputSchema = TfMetaSchema.extend({
  file_system_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  volume_id: resolvableValue(z.string().optional()),
})

export const AwsFsxBackupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type AwsFsxBackupInputProps =
  & z.input<typeof AwsFsxBackupInputSchema>
  & NodeProps

export type AwsFsxBackupOutputProps =
  & z.output<typeof AwsFsxBackupOutputSchema>
  & z.output<typeof AwsFsxBackupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/fsx_backup

export function AwsFsxBackup(props: Partial<AwsFsxBackupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_backup'
      _category='resource'
      _title={_title}
      _inputSchema={AwsFsxBackupInputSchema}
      _outputSchema={AwsFsxBackupOutputSchema}
      {...props}
    />
  )
}

export const useAwsFsxBackup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsFsxBackupOutputProps>(
    AwsFsxBackup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFsxBackups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsFsxBackupOutputProps>(
    AwsFsxBackup,
    idFilter,
    baseNode,
    optional,
  )
