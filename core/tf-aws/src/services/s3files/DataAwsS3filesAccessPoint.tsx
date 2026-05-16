import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3filesAccessPoint } from './AwsS3filesAccessPoint.tsx'

export const DataAwsS3filesAccessPointInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsS3filesAccessPointOutputSchema = z.object({
  arn: z.string().optional(),
  file_system_id: z.string().optional(),
  name: z.string().optional(),
  owner_id: z.string().optional(),
  posix_user: z.object({
    gid: z.number().optional(),
    secondary_gids: z.set(z.number()).optional(),
    uid: z.number().optional(),
  }).array().optional().optional(),
  root_directory: z.object({
    path: z.string().optional(),
    creation_permissions: z.object({
      owner_gid: z.number().optional(),
      owner_uid: z.number().optional(),
      permissions: z.string().optional(),
    }).array().optional(),
  }).array().optional().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsS3filesAccessPointInputProps =
  & z.input<typeof DataAwsS3filesAccessPointInputSchema>
  & NodeProps

export type DataAwsS3filesAccessPointOutputProps =
  & z.output<typeof DataAwsS3filesAccessPointOutputSchema>
  & z.output<typeof DataAwsS3filesAccessPointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3files_access_point

export function DataAwsS3filesAccessPoint(
  props: Partial<DataAwsS3filesAccessPointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsS3filesAccessPoint
      _type='aws_s3files_access_point'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsS3filesAccessPointInputSchema}
      _outputSchema={DataAwsS3filesAccessPointOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3filesAccessPoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsS3filesAccessPointOutputProps>(
    DataAwsS3filesAccessPoint,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsS3filesAccessPoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsS3filesAccessPointOutputProps>(
    DataAwsS3filesAccessPoint,
    idFilter,
    baseNode,
    optional,
  )
