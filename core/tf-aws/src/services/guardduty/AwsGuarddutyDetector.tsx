import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/guardduty_detector

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  account_id: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGuarddutyDetector(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_detector'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyDetector = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGuarddutyDetector, node, id)

export const useAwsGuarddutyDetectors = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGuarddutyDetector, node, id)
