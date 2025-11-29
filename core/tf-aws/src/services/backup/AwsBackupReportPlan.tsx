import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/backup_report_plan

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  report_delivery_channel: resolvableValue(z.object({
    formats: z.string().array().optional(),
    s3_bucket_name: z.string(),
    s3_key_prefix: z.string().optional(),
  })),
  report_setting: resolvableValue(z.object({
    accounts: z.string().array().optional(),
    framework_arns: z.string().array().optional(),
    number_of_frameworks: z.number().optional(),
    organization_units: z.string().array().optional(),
    regions: z.string().array().optional(),
    report_template: z.string(),
  })),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  deployment_status: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBackupReportPlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_report_plan'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupReportPlan = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBackupReportPlan, node, id)

export const useAwsBackupReportPlans = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBackupReportPlan, node, id)
