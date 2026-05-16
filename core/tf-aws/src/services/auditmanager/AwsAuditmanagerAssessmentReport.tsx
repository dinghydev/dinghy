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

export const AwsAuditmanagerAssessmentReportInputSchema = TfMetaSchema.extend({
  assessment_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsAuditmanagerAssessmentReportOutputSchema = z.object({
  author: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
})

export type AwsAuditmanagerAssessmentReportInputProps =
  & z.input<typeof AwsAuditmanagerAssessmentReportInputSchema>
  & NodeProps

export type AwsAuditmanagerAssessmentReportOutputProps =
  & z.output<typeof AwsAuditmanagerAssessmentReportOutputSchema>
  & z.output<typeof AwsAuditmanagerAssessmentReportInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/auditmanager_assessment_report

export function AwsAuditmanagerAssessmentReport(
  props: Partial<AwsAuditmanagerAssessmentReportInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_auditmanager_assessment_report'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAuditmanagerAssessmentReportInputSchema}
      _outputSchema={AwsAuditmanagerAssessmentReportOutputSchema}
      {...props}
    />
  )
}

export const useAwsAuditmanagerAssessmentReport = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAuditmanagerAssessmentReportOutputProps>(
    AwsAuditmanagerAssessmentReport,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAuditmanagerAssessmentReports = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAuditmanagerAssessmentReportOutputProps>(
    AwsAuditmanagerAssessmentReport,
    idFilter,
    baseNode,
    optional,
  )
