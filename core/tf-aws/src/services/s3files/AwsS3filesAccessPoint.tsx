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

export const AwsS3filesAccessPointInputSchema = TfMetaSchema.extend({
  file_system_id: resolvableValue(z.string()),
  posix_user: resolvableValue(
    z.object({
      gid: z.number(),
      secondary_gids: z.number().array().optional(),
      uid: z.number(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  root_directory: resolvableValue(
    z.object({
      path: z.string().optional(),
      creation_permissions: z.object({
        owner_gid: z.number(),
        owner_uid: z.number(),
        permissions: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsS3filesAccessPointOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  owner_id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsS3filesAccessPointImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3filesAccessPointInputProps =
  & z.input<typeof AwsS3filesAccessPointInputSchema>
  & z.input<typeof AwsS3filesAccessPointImportSchema>
  & NodeProps

export type AwsS3filesAccessPointOutputProps =
  & z.output<typeof AwsS3filesAccessPointOutputSchema>
  & z.output<typeof AwsS3filesAccessPointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3files_access_point

export function AwsS3filesAccessPoint(
  props: Partial<AwsS3filesAccessPointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3files_access_point'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3filesAccessPointInputSchema}
      _outputSchema={AwsS3filesAccessPointOutputSchema}
      _importSchema={AwsS3filesAccessPointImportSchema}
      {...props}
    />
  )
}

export const useAwsS3filesAccessPoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3filesAccessPointOutputProps>(
    AwsS3filesAccessPoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3filesAccessPoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3filesAccessPointOutputProps>(
    AwsS3filesAccessPoint,
    idFilter,
    baseNode,
    optional,
  )
