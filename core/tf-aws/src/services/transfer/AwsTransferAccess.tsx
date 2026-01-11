import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  external_id: resolvableValue(z.string()),
  server_id: resolvableValue(z.string()),
  home_directory: resolvableValue(z.string().optional()),
  home_directory_mappings: resolvableValue(
    z.object({
      entry: z.string(),
      target: z.string(),
    }).array().optional(),
  ),
  home_directory_type: resolvableValue(z.string().optional()),
  policy: resolvableValue(z.string().optional()),
  posix_profile: resolvableValue(
    z.object({
      gid: z.number(),
      secondary_gids: z.number().array().optional(),
      uid: z.number(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  role: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_access

export function AwsTransferAccess(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_access'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferAccesss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsTransferAccess, idFilter, baseNode, optional)
