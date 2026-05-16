import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsIamOrganizationsFeaturesInputSchema = TfMetaSchema.extend({
  enabled_features: resolvableValue(z.string().array()),
})

export const AwsIamOrganizationsFeaturesOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsIamOrganizationsFeaturesInputProps =
  & z.input<typeof AwsIamOrganizationsFeaturesInputSchema>
  & NodeProps

export type AwsIamOrganizationsFeaturesOutputProps =
  & z.output<typeof AwsIamOrganizationsFeaturesOutputSchema>
  & z.output<typeof AwsIamOrganizationsFeaturesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_organizations_features

export function AwsIamOrganizationsFeatures(
  props: Partial<AwsIamOrganizationsFeaturesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_organizations_features'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamOrganizationsFeaturesInputSchema}
      _outputSchema={AwsIamOrganizationsFeaturesOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamOrganizationsFeaturess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamOrganizationsFeaturesOutputProps>(
    AwsIamOrganizationsFeatures,
    idFilter,
    baseNode,
    optional,
  )
