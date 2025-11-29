import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBackupReportPlan } from './AwsBackupReportPlan.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/backup_report_plan

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  deployment_status: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  report_delivery_channel: z.object({
    formats: z.string().array(),
    s3_bucket_name: z.string(),
    s3_key_prefix: z.string(),
  }).array().optional(),
  report_setting: z.object({
    accounts: z.string().array(),
    framework_arns: z.string().array(),
    number_of_frameworks: z.number(),
    organization_units: z.string().array(),
    regions: z.string().array(),
    report_template: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsBackupReportPlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsBackupReportPlan
      _type='aws_backup_report_plan'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBackupReportPlan = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsBackupReportPlan, node, id)

export const useDataAwsBackupReportPlans = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsBackupReportPlan, node, id)
