import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOrganizationsResourceTagsInputSchema = TfMetaSchema.extend({
  resource_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const DataAwsOrganizationsResourceTagsOutputSchema = z.object({
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsOrganizationsResourceTagsInputProps =
  & z.input<typeof DataAwsOrganizationsResourceTagsInputSchema>
  & NodeProps

export type DataAwsOrganizationsResourceTagsOutputProps =
  & z.output<typeof DataAwsOrganizationsResourceTagsOutputSchema>
  & z.output<typeof DataAwsOrganizationsResourceTagsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_resource_tags

export function DataAwsOrganizationsResourceTags(
  props: Partial<DataAwsOrganizationsResourceTagsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_resource_tags'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsResourceTagsInputSchema}
      _outputSchema={DataAwsOrganizationsResourceTagsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsResourceTagss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOrganizationsResourceTagsOutputProps>(
    DataAwsOrganizationsResourceTags,
    idFilter,
    baseNode,
    optional,
  )
