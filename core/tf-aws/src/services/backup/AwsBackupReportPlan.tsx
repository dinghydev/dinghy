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

export const AwsBackupReportPlanInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
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
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsBackupReportPlanOutputSchema = z.object({
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  deployment_status: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsBackupReportPlanInputProps =
  & z.input<typeof AwsBackupReportPlanInputSchema>
  & NodeProps

export type AwsBackupReportPlanOutputProps =
  & z.output<typeof AwsBackupReportPlanOutputSchema>
  & z.output<typeof AwsBackupReportPlanInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/backup_report_plan

export function AwsBackupReportPlan(
  props: Partial<AwsBackupReportPlanInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_report_plan'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBackupReportPlanInputSchema}
      _outputSchema={AwsBackupReportPlanOutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupReportPlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBackupReportPlanOutputProps>(
    AwsBackupReportPlan,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBackupReportPlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBackupReportPlanOutputProps>(
    AwsBackupReportPlan,
    idFilter,
    baseNode,
    optional,
  )
