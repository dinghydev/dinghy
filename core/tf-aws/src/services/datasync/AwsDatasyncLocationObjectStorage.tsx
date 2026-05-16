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

export const AwsDatasyncLocationObjectStorageInputSchema = TfMetaSchema.extend({
  bucket_name: resolvableValue(z.string()),
  server_hostname: resolvableValue(z.string()),
  access_key: resolvableValue(z.string().optional()),
  agent_arns: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  secret_key: resolvableValue(z.string().optional()),
  server_certificate: resolvableValue(z.string().optional()),
  server_port: resolvableValue(z.number().optional()),
  server_protocol: resolvableValue(z.string().optional()),
  subdirectory: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDatasyncLocationObjectStorageOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uri: z.string().optional(),
})

export const AwsDatasyncLocationObjectStorageImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDatasyncLocationObjectStorageInputProps =
  & z.input<typeof AwsDatasyncLocationObjectStorageInputSchema>
  & z.input<typeof AwsDatasyncLocationObjectStorageImportSchema>
  & NodeProps

export type AwsDatasyncLocationObjectStorageOutputProps =
  & z.output<typeof AwsDatasyncLocationObjectStorageOutputSchema>
  & z.output<typeof AwsDatasyncLocationObjectStorageInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datasync_location_object_storage

export function AwsDatasyncLocationObjectStorage(
  props: Partial<AwsDatasyncLocationObjectStorageInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_object_storage'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatasyncLocationObjectStorageInputSchema}
      _outputSchema={AwsDatasyncLocationObjectStorageOutputSchema}
      _importSchema={AwsDatasyncLocationObjectStorageImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationObjectStorage = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatasyncLocationObjectStorageOutputProps>(
    AwsDatasyncLocationObjectStorage,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatasyncLocationObjectStorages = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatasyncLocationObjectStorageOutputProps>(
    AwsDatasyncLocationObjectStorage,
    idFilter,
    baseNode,
    optional,
  )
