import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsResourcegroupstaggingapiRequiredTagsInputSchema =
  TfMetaSchema.extend({
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsResourcegroupstaggingapiRequiredTagsOutputSchema = z.object(
  {
    required_tags: z.object({
      cloud_formation_resource_types: z.string().array(),
      reporting_tag_keys: z.string().array(),
      resource_type: z.string(),
    }).array().optional(),
  },
)

export type DataAwsResourcegroupstaggingapiRequiredTagsInputProps =
  & z.input<typeof DataAwsResourcegroupstaggingapiRequiredTagsInputSchema>
  & NodeProps

export type DataAwsResourcegroupstaggingapiRequiredTagsOutputProps =
  & z.output<typeof DataAwsResourcegroupstaggingapiRequiredTagsOutputSchema>
  & z.output<typeof DataAwsResourcegroupstaggingapiRequiredTagsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/resourcegroupstaggingapi_required_tags

export function DataAwsResourcegroupstaggingapiRequiredTags(
  props: Partial<DataAwsResourcegroupstaggingapiRequiredTagsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_resourcegroupstaggingapi_required_tags'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsResourcegroupstaggingapiRequiredTagsInputSchema}
      _outputSchema={DataAwsResourcegroupstaggingapiRequiredTagsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsResourcegroupstaggingapiRequiredTagss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsResourcegroupstaggingapiRequiredTagsOutputProps>(
    DataAwsResourcegroupstaggingapiRequiredTags,
    idFilter,
    baseNode,
    optional,
  )
