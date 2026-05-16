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

export const AwsDirectoryServiceSharedDirectoryInputSchema = TfMetaSchema
  .extend({
    directory_id: resolvableValue(z.string()),
    target: resolvableValue(z.object({
      id: z.string(),
      type: z.string().optional(),
    })),
    method: resolvableValue(z.string().optional()),
    notes: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsDirectoryServiceSharedDirectoryOutputSchema = z.object({
  id: z.string().optional(),
  shared_directory_id: z.string().optional(),
})

export type AwsDirectoryServiceSharedDirectoryInputProps =
  & z.input<typeof AwsDirectoryServiceSharedDirectoryInputSchema>
  & NodeProps

export type AwsDirectoryServiceSharedDirectoryOutputProps =
  & z.output<typeof AwsDirectoryServiceSharedDirectoryOutputSchema>
  & z.output<typeof AwsDirectoryServiceSharedDirectoryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/directory_service_shared_directory

export function AwsDirectoryServiceSharedDirectory(
  props: Partial<AwsDirectoryServiceSharedDirectoryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_directory_service_shared_directory'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDirectoryServiceSharedDirectoryInputSchema}
      _outputSchema={AwsDirectoryServiceSharedDirectoryOutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceSharedDirectory = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDirectoryServiceSharedDirectoryOutputProps>(
    AwsDirectoryServiceSharedDirectory,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDirectoryServiceSharedDirectorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDirectoryServiceSharedDirectoryOutputProps>(
    AwsDirectoryServiceSharedDirectory,
    idFilter,
    baseNode,
    optional,
  )
