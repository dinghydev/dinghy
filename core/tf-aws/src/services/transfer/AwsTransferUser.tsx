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

export const AwsTransferUserInputSchema = TfMetaSchema.extend({
  role: resolvableValue(z.string()),
  server_id: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  home_directory: resolvableValue(z.string().optional()),
  home_directory_mappings: resolvableValue(
    z.object({
      entry: z.string(),
      target: z.string(),
    }).array().optional(),
  ),
  home_directory_type: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  policy: resolvableValue(z.string().optional()),
  posix_profile: resolvableValue(
    z.object({
      gid: z.number(),
      secondary_gids: z.number().array().optional(),
      uid: z.number(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsTransferUserOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsTransferUserInputProps =
  & z.input<typeof AwsTransferUserInputSchema>
  & NodeProps

export type AwsTransferUserOutputProps =
  & z.output<typeof AwsTransferUserOutputSchema>
  & z.output<typeof AwsTransferUserInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_user

export function AwsTransferUser(props: Partial<AwsTransferUserInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_user'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTransferUserInputSchema}
      _outputSchema={AwsTransferUserOutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTransferUserOutputProps>(
    AwsTransferUser,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTransferUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTransferUserOutputProps>(
    AwsTransferUser,
    idFilter,
    baseNode,
    optional,
  )
