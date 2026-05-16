import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsS3filesFileSystemsInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsS3filesFileSystemsOutputSchema = z.object({
  file_systems: z.object({
    arn: z.string().optional(),
    bucket: z.string().optional(),
    creation_time: z.string().optional(),
    id: z.string().optional(),
    kms_key_id: z.string().optional(),
    name: z.string().optional(),
    owner_id: z.string().optional(),
    role_arn: z.string().optional(),
    status: z.string().optional(),
    status_message: z.string().optional(),
  }).array().optional().optional(),
})

export type DataAwsS3filesFileSystemsInputProps =
  & z.input<typeof DataAwsS3filesFileSystemsInputSchema>
  & NodeProps

export type DataAwsS3filesFileSystemsOutputProps =
  & z.output<typeof DataAwsS3filesFileSystemsOutputSchema>
  & z.output<typeof DataAwsS3filesFileSystemsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3files_file_systems

export function DataAwsS3filesFileSystems(
  props: Partial<DataAwsS3filesFileSystemsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3files_file_systems'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsS3filesFileSystemsInputSchema}
      _outputSchema={DataAwsS3filesFileSystemsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsS3filesFileSystemss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsS3filesFileSystemsOutputProps>(
    DataAwsS3filesFileSystems,
    idFilter,
    baseNode,
    optional,
  )
