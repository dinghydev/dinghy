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

export const AwsGuarddutyDetectorInputSchema = TfMetaSchema.extend({
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
            enable: z.boolean(),
          }),
        }),
      }).optional(),
      s3_logs: z.object({
        enable: z.boolean(),
      }).optional(),
    }).optional(),
  ),
  enable: resolvableValue(z.boolean().optional()),
  finding_publishing_frequency: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsGuarddutyDetectorOutputSchema = z.object({
  account_id: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsGuarddutyDetectorInputProps =
  & z.input<typeof AwsGuarddutyDetectorInputSchema>
  & NodeProps

export type AwsGuarddutyDetectorOutputProps =
  & z.output<typeof AwsGuarddutyDetectorOutputSchema>
  & z.output<typeof AwsGuarddutyDetectorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/guardduty_detector

export function AwsGuarddutyDetector(
  props: Partial<AwsGuarddutyDetectorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_detector'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGuarddutyDetectorInputSchema}
      _outputSchema={AwsGuarddutyDetectorOutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyDetector = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGuarddutyDetectorOutputProps>(
    AwsGuarddutyDetector,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGuarddutyDetectors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGuarddutyDetectorOutputProps>(
    AwsGuarddutyDetector,
    idFilter,
    baseNode,
    optional,
  )
