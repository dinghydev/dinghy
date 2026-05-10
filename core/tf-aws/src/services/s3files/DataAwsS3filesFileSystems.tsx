import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3files_file_systems

export function DataAwsS3filesFileSystems(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3files_file_systems'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsS3filesFileSystemss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsS3filesFileSystems,
    idFilter,
    baseNode,
    optional,
  )
