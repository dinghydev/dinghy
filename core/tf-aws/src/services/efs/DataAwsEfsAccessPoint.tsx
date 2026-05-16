import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEfsAccessPoint } from './AwsEfsAccessPoint.tsx'

export const DataAwsEfsAccessPointInputSchema = TfMetaSchema.extend({
  access_point_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEfsAccessPointOutputSchema = z.object({
  arn: z.string().optional(),
  file_system_arn: z.string().optional(),
  file_system_id: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  posix_user: z.object({
    gid: z.number(),
    secondary_gids: z.set(z.number()),
    uid: z.number(),
  }).array().optional(),
  root_directory: z.object({
    creation_info: z.object({
      owner_gid: z.number(),
      owner_uid: z.number(),
      permissions: z.string(),
    }).array(),
    path: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsEfsAccessPointInputProps =
  & z.input<typeof DataAwsEfsAccessPointInputSchema>
  & NodeProps

export type DataAwsEfsAccessPointOutputProps =
  & z.output<typeof DataAwsEfsAccessPointOutputSchema>
  & z.output<typeof DataAwsEfsAccessPointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/efs_access_point

export function DataAwsEfsAccessPoint(
  props: Partial<DataAwsEfsAccessPointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEfsAccessPoint
      _type='aws_efs_access_point'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEfsAccessPointInputSchema}
      _outputSchema={DataAwsEfsAccessPointOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEfsAccessPoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEfsAccessPointOutputProps>(
    DataAwsEfsAccessPoint,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEfsAccessPoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEfsAccessPointOutputProps>(
    DataAwsEfsAccessPoint,
    idFilter,
    baseNode,
    optional,
  )
