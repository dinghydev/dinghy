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

export const AwsEfsAccessPointInputSchema = TfMetaSchema.extend({
  file_system_id: resolvableValue(z.string()),
  posix_user: resolvableValue(
    z.object({
      gid: z.number(),
      secondary_gids: z.number().array().optional(),
      uid: z.number(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  root_directory: resolvableValue(
    z.object({
      path: z.string().optional(),
      creation_info: z.object({
        owner_gid: z.number(),
        owner_uid: z.number(),
        permissions: z.string(),
      }).optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsEfsAccessPointOutputSchema = z.object({
  arn: z.string().optional(),
  file_system_arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEfsAccessPointInputProps =
  & z.input<typeof AwsEfsAccessPointInputSchema>
  & NodeProps

export type AwsEfsAccessPointOutputProps =
  & z.output<typeof AwsEfsAccessPointOutputSchema>
  & z.output<typeof AwsEfsAccessPointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/efs_access_point

export function AwsEfsAccessPoint(props: Partial<AwsEfsAccessPointInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_efs_access_point'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEfsAccessPointInputSchema}
      _outputSchema={AwsEfsAccessPointOutputSchema}
      {...props}
    />
  )
}

export const useAwsEfsAccessPoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEfsAccessPointOutputProps>(
    AwsEfsAccessPoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEfsAccessPoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEfsAccessPointOutputProps>(
    AwsEfsAccessPoint,
    idFilter,
    baseNode,
    optional,
  )
