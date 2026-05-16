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

export const AwsDirectoryServiceSharedDirectoryAccepterInputSchema =
  TfMetaSchema.extend({
    shared_directory_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsDirectoryServiceSharedDirectoryAccepterOutputSchema = z.object({
  id: z.string().optional(),
  method: z.string().optional(),
  notes: z.string().optional(),
  owner_account_id: z.string().optional(),
  owner_directory_id: z.string().optional(),
})

export type AwsDirectoryServiceSharedDirectoryAccepterInputProps =
  & z.input<typeof AwsDirectoryServiceSharedDirectoryAccepterInputSchema>
  & NodeProps

export type AwsDirectoryServiceSharedDirectoryAccepterOutputProps =
  & z.output<typeof AwsDirectoryServiceSharedDirectoryAccepterOutputSchema>
  & z.output<typeof AwsDirectoryServiceSharedDirectoryAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/directory_service_shared_directory_accepter

export function AwsDirectoryServiceSharedDirectoryAccepter(
  props: Partial<AwsDirectoryServiceSharedDirectoryAccepterInputProps>,
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
      _inputSchema={AwsDirectoryServiceSharedDirectoryAccepterInputSchema}
      _outputSchema={AwsDirectoryServiceSharedDirectoryAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceSharedDirectoryAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDirectoryServiceSharedDirectoryAccepterOutputProps>(
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
  useTypedNodes<AwsDirectoryServiceSharedDirectoryAccepterOutputProps>(
    AwsDirectoryServiceSharedDirectoryAccepter,
    idFilter,
    baseNode,
    optional,
  )
