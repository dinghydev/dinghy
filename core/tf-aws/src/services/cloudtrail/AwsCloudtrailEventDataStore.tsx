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

export const AwsCloudtrailEventDataStoreInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  advanced_event_selector: resolvableValue(
    z.object({
      name: z.string().optional(),
      field_selector: z.object({
        ends_with: z.string().array().optional(),
        equals: z.string().array().optional(),
        field: z.string().optional(),
        not_ends_with: z.string().array().optional(),
        not_equals: z.string().array().optional(),
        not_starts_with: z.string().array().optional(),
        starts_with: z.string().array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  billing_mode: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  multi_region_enabled: resolvableValue(z.boolean().optional()),
  organization_enabled: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  retention_period: resolvableValue(z.number().optional()),
  suspend: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  termination_protection_enabled: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsCloudtrailEventDataStoreOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsCloudtrailEventDataStoreImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCloudtrailEventDataStoreInputProps =
  & z.input<typeof AwsCloudtrailEventDataStoreInputSchema>
  & z.input<typeof AwsCloudtrailEventDataStoreImportSchema>
  & NodeProps

export type AwsCloudtrailEventDataStoreOutputProps =
  & z.output<typeof AwsCloudtrailEventDataStoreOutputSchema>
  & z.output<typeof AwsCloudtrailEventDataStoreInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudtrail_event_data_store

export function AwsCloudtrailEventDataStore(
  props: Partial<AwsCloudtrailEventDataStoreInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudtrail_event_data_store'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudtrailEventDataStoreInputSchema}
      _outputSchema={AwsCloudtrailEventDataStoreOutputSchema}
      _importSchema={AwsCloudtrailEventDataStoreImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudtrailEventDataStore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudtrailEventDataStoreOutputProps>(
    AwsCloudtrailEventDataStore,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudtrailEventDataStores = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudtrailEventDataStoreOutputProps>(
    AwsCloudtrailEventDataStore,
    idFilter,
    baseNode,
    optional,
  )
