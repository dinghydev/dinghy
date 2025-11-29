import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/guardduty_organization_configuration_feature

export const InputSchema = z.object({
  auto_enable: resolvableValue(z.string()),
  detector_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  additional_configuration: resolvableValue(
    z.object({
      auto_enable: z.string(),
      name: z.string(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

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
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsGuarddutyOrganizationConfigurationFeature,
    node,
    id,
  )

export const useAwsGuarddutyOrganizationConfigurationFeatures = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsGuarddutyOrganizationConfigurationFeature,
    node,
    id,
  )
