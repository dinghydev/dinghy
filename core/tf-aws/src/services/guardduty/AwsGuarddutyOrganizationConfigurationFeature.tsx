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

export const AwsGuarddutyOrganizationConfigurationFeatureInputSchema =
  TfMetaSchema.extend({
    auto_enable: resolvableValue(z.string()),
    detector_id: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    additional_configuration: resolvableValue(
      z.object({
        auto_enable: z.string(),
        name: z.string(),
      }).array().optional(),
    ),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsGuarddutyOrganizationConfigurationFeatureOutputSchema = z
  .object({})

export type AwsGuarddutyOrganizationConfigurationFeatureInputProps =
  & z.input<typeof AwsGuarddutyOrganizationConfigurationFeatureInputSchema>
  & NodeProps

export type AwsGuarddutyOrganizationConfigurationFeatureOutputProps =
  & z.output<typeof AwsGuarddutyOrganizationConfigurationFeatureOutputSchema>
  & z.output<typeof AwsGuarddutyOrganizationConfigurationFeatureInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/guardduty_organization_configuration_feature

export function AwsGuarddutyOrganizationConfigurationFeature(
  props: Partial<AwsGuarddutyOrganizationConfigurationFeatureInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_organization_configuration_feature'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGuarddutyOrganizationConfigurationFeatureInputSchema}
      _outputSchema={AwsGuarddutyOrganizationConfigurationFeatureOutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyOrganizationConfigurationFeature = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGuarddutyOrganizationConfigurationFeatureOutputProps>(
    AwsGuarddutyOrganizationConfigurationFeature,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGuarddutyOrganizationConfigurationFeatures = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGuarddutyOrganizationConfigurationFeatureOutputProps>(
    AwsGuarddutyOrganizationConfigurationFeature,
    idFilter,
    baseNode,
    optional,
  )
