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

export const AwsDatasyncLocationAzureBlobInputSchema = TfMetaSchema.extend({
  agent_arns: resolvableValue(z.string().array()),
  authentication_type: resolvableValue(z.string()),
  container_url: resolvableValue(z.string()),
  access_tier: resolvableValue(z.string().optional()),
  blob_type: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  sas_configuration: resolvableValue(
    z.object({
      token: z.string(),
    }).optional(),
  ),
  subdirectory: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDatasyncLocationAzureBlobOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uri: z.string().optional(),
})

export const AwsDatasyncLocationAzureBlobImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDatasyncLocationAzureBlobInputProps =
  & z.input<typeof AwsDatasyncLocationAzureBlobInputSchema>
  & z.input<typeof AwsDatasyncLocationAzureBlobImportSchema>
  & NodeProps

export type AwsDatasyncLocationAzureBlobOutputProps =
  & z.output<typeof AwsDatasyncLocationAzureBlobOutputSchema>
  & z.output<typeof AwsDatasyncLocationAzureBlobInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datasync_location_azure_blob

export function AwsDatasyncLocationAzureBlob(
  props: Partial<AwsDatasyncLocationAzureBlobInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_location_azure_blob'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatasyncLocationAzureBlobInputSchema}
      _outputSchema={AwsDatasyncLocationAzureBlobOutputSchema}
      _importSchema={AwsDatasyncLocationAzureBlobImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncLocationAzureBlob = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatasyncLocationAzureBlobOutputProps>(
    AwsDatasyncLocationAzureBlob,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatasyncLocationAzureBlobs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatasyncLocationAzureBlobOutputProps>(
    AwsDatasyncLocationAzureBlob,
    idFilter,
    baseNode,
    optional,
  )
