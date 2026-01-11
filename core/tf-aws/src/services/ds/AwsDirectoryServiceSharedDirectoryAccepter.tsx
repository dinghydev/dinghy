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
  shared_directory_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  method: z.string().optional(),
  notes: z.string().optional(),
  owner_account_id: z.string().optional(),
  owner_directory_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/directory_service_shared_directory_accepter

export function AwsDirectoryServiceSharedDirectoryAccepter(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_directory_service_shared_directory_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceSharedDirectoryAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDirectoryServiceSharedDirectoryAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDirectoryServiceSharedDirectoryAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDirectoryServiceSharedDirectoryAccepter,
    idFilter,
    baseNode,
    optional,
  )
