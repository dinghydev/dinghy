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

export const AwsGuarddutyOrganizationConfigurationInputSchema = TfMetaSchema
  .extend({
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

export const AwsGuarddutyOrganizationConfigurationOutputSchema = z.object({})

export type AwsGuarddutyOrganizationConfigurationInputProps =
  & z.input<typeof AwsGuarddutyOrganizationConfigurationInputSchema>
  & NodeProps

export type AwsGuarddutyOrganizationConfigurationOutputProps =
  & z.output<typeof AwsGuarddutyOrganizationConfigurationOutputSchema>
  & z.output<typeof AwsGuarddutyOrganizationConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/guardduty_organization_configuration

export function AwsGuarddutyOrganizationConfiguration(
  props: Partial<AwsGuarddutyOrganizationConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_organization_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGuarddutyOrganizationConfigurationInputSchema}
      _outputSchema={AwsGuarddutyOrganizationConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyOrganizationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGuarddutyOrganizationConfigurationOutputProps>(
    AwsGuarddutyOrganizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGuarddutyOrganizationConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGuarddutyOrganizationConfigurationOutputProps>(
    AwsGuarddutyOrganizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
