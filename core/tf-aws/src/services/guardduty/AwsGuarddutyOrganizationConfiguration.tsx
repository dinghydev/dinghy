import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/guardduty_organization_configuration

export const InputSchema = z.object({
  auto_enable_organization_members: resolvableValue(z.string()),
  detector_id: resolvableValue(z.string()),
  datasources: resolvableValue(
    z.object({
      kubernetes: z.object({
        audit_logs: z.object({
          enable: z.boolean(),
        }),
      }).optional(),
      malware_protection: z.object({
        scan_ec2_instance_with_findings: z.object({
          ebs_volumes: z.object({
            auto_enable: z.boolean(),
          }),
        }),
      }).optional(),
      s3_logs: z.object({
        auto_enable: z.boolean(),
      }).optional(),
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

export function AwsGuarddutyOrganizationConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_organization_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyOrganizationConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsGuarddutyOrganizationConfiguration, node, id)

export const useAwsGuarddutyOrganizationConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsGuarddutyOrganizationConfiguration, node, id)
