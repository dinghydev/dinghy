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

export const AwsOrganizationsTagInputSchema = TfMetaSchema.extend({
  __key: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  value: resolvableValue(z.string()),
})

export const AwsOrganizationsTagOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsOrganizationsTagInputProps =
  & z.input<typeof AwsOrganizationsTagInputSchema>
  & NodeProps

export type AwsOrganizationsTagOutputProps =
  & z.output<typeof AwsOrganizationsTagOutputSchema>
  & z.output<typeof AwsOrganizationsTagInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/organizations_tag

export function AwsOrganizationsTag(
  props: Partial<AwsOrganizationsTagInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_tag'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOrganizationsTagInputSchema}
      _outputSchema={AwsOrganizationsTagOutputSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsTag = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOrganizationsTagOutputProps>(
    AwsOrganizationsTag,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOrganizationsTags = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOrganizationsTagOutputProps>(
    AwsOrganizationsTag,
    idFilter,
    baseNode,
    optional,
  )
