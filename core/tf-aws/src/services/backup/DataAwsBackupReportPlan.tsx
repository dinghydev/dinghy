import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBackupReportPlan } from './AwsBackupReportPlan.tsx'

export const DataAwsBackupReportPlanInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsBackupReportPlanOutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  deployment_status: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  report_delivery_channel: z.object({
    formats: z.set(z.string()),
    s3_bucket_name: z.string(),
    s3_key_prefix: z.string(),
  }).array().optional(),
  report_setting: z.object({
    accounts: z.set(z.string()),
    framework_arns: z.set(z.string()),
    number_of_frameworks: z.number(),
    organization_units: z.set(z.string()),
    regions: z.set(z.string()),
    report_template: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsBackupReportPlanInputProps =
  & z.input<typeof DataAwsBackupReportPlanInputSchema>
  & NodeProps

export type DataAwsBackupReportPlanOutputProps =
  & z.output<typeof DataAwsBackupReportPlanOutputSchema>
  & z.output<typeof DataAwsBackupReportPlanInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/backup_report_plan

export function DataAwsBackupReportPlan(
  props: Partial<DataAwsBackupReportPlanInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsBackupReportPlan
      _type='aws_backup_report_plan'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsBackupReportPlanInputSchema}
      _outputSchema={DataAwsBackupReportPlanOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBackupReportPlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsBackupReportPlanOutputProps>(
    DataAwsBackupReportPlan,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsBackupReportPlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsBackupReportPlanOutputProps>(
    DataAwsBackupReportPlan,
    idFilter,
    baseNode,
    optional,
  )
