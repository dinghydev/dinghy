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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/guardduty_organization_configuration_feature

export function AwsGuarddutyOrganizationConfigurationFeature(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_organization_configuration_feature'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyOrganizationConfigurationFeature = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsGuarddutyOrganizationConfigurationFeature,
    idFilter,
    baseNode,
    optional,
  )
