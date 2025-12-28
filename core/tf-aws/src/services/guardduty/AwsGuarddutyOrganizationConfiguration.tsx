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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/guardduty_organization_configuration

export function AwsGuarddutyOrganizationConfiguration(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyOrganizationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsGuarddutyOrganizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
