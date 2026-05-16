import {
  camelCaseToWords,
  type NodeProps,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsRamSharingWithOrganizationInputSchema = TfMetaSchema.extend({})

export const AwsRamSharingWithOrganizationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRamSharingWithOrganizationInputProps =
  & z.input<typeof AwsRamSharingWithOrganizationInputSchema>
  & NodeProps

export type AwsRamSharingWithOrganizationOutputProps =
  & z.output<typeof AwsRamSharingWithOrganizationOutputSchema>
  & z.output<typeof AwsRamSharingWithOrganizationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ram_sharing_with_organization

export function AwsRamSharingWithOrganization(
  props: Partial<AwsRamSharingWithOrganizationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ram_sharing_with_organization'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRamSharingWithOrganizationInputSchema}
      _outputSchema={AwsRamSharingWithOrganizationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRamSharingWithOrganization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRamSharingWithOrganizationOutputProps>(
    AwsRamSharingWithOrganization,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRamSharingWithOrganizations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRamSharingWithOrganizationOutputProps>(
    AwsRamSharingWithOrganization,
    idFilter,
    baseNode,
    optional,
  )
