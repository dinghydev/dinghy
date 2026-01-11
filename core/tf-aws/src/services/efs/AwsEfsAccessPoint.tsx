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

export const InputSchema = z.object({
  file_system_id: resolvableValue(z.string()),
  owner_id: resolvableValue(z.string()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  file_system_arn: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/efs_access_point

export function AwsEfsAccessPoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_efs_access_point'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEfsAccessPoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsEfsAccessPoint, idFilter, baseNode, optional)

export const useAwsEfsAccessPoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsEfsAccessPoint, idFilter, baseNode, optional)
