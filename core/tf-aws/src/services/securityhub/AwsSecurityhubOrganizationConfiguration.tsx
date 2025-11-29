import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/securityhub_organization_configuration

export const InputSchema = z.object({
  auto_enable: resolvableValue(z.boolean()),
  auto_enable_standards: resolvableValue(z.string().optional()),
  organization_configuration: resolvableValue(
    z.object({
      configuration_type: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSecurityhubOrganizationConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_organization_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubOrganizationConfiguration = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsSecurityhubOrganizationConfiguration, node, id)

export const useAwsSecurityhubOrganizationConfigurations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsSecurityhubOrganizationConfiguration, node, id)
