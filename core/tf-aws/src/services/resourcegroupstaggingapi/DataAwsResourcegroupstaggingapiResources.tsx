import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsResourcegroupstaggingapiResourcesInputSchema = TfMetaSchema
  .extend({
    exclude_compliant_resources: resolvableValue(z.boolean().optional()),
    id: resolvableValue(z.string().optional()),
    include_compliance_details: resolvableValue(z.boolean().optional()),
    region: resolvableValue(z.string().optional()),
    resource_arn_list: resolvableValue(z.string().array().optional()),
    resource_type_filters: resolvableValue(z.string().array().optional()),
    tag_filter: resolvableValue(
      z.object({
        key: z.string(),
        values: z.string().array().optional(),
      }).array().optional(),
    ),
  })

export const DataAwsResourcegroupstaggingapiResourcesOutputSchema = z.object({
  resource_tag_mapping_list: z.object({
    compliance_details: z.object({
      compliance_status: z.boolean(),
      keys_with_noncompliant_values: z.set(z.string()),
      non_compliant_keys: z.set(z.string()),
    }).array(),
    resource_arn: z.string(),
    tags: z.record(z.string(), z.string()),
  }).array().optional(),
})

export type DataAwsResourcegroupstaggingapiResourcesInputProps =
  & z.input<typeof DataAwsResourcegroupstaggingapiResourcesInputSchema>
  & NodeProps

export type DataAwsResourcegroupstaggingapiResourcesOutputProps =
  & z.output<typeof DataAwsResourcegroupstaggingapiResourcesOutputSchema>
  & z.output<typeof DataAwsResourcegroupstaggingapiResourcesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/resourcegroupstaggingapi_resources

export function DataAwsResourcegroupstaggingapiResources(
  props: Partial<DataAwsResourcegroupstaggingapiResourcesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_resourcegroupstaggingapi_resources'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsResourcegroupstaggingapiResourcesInputSchema}
      _outputSchema={DataAwsResourcegroupstaggingapiResourcesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsResourcegroupstaggingapiResourcess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsResourcegroupstaggingapiResourcesOutputProps>(
    DataAwsResourcegroupstaggingapiResources,
    idFilter,
    baseNode,
    optional,
  )
