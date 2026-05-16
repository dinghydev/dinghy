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

export const AwsAuditmanagerAssessmentDelegationInputSchema = TfMetaSchema
  .extend({
    assessment_id: resolvableValue(z.string()),
    control_set_id: resolvableValue(z.string()),
    role_arn: resolvableValue(z.string()),
    role_type: resolvableValue(z.string()),
    comment: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsAuditmanagerAssessmentDelegationOutputSchema = z.object({
  delegation_id: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
})

export type AwsAuditmanagerAssessmentDelegationInputProps =
  & z.input<typeof AwsAuditmanagerAssessmentDelegationInputSchema>
  & NodeProps

export type AwsAuditmanagerAssessmentDelegationOutputProps =
  & z.output<typeof AwsAuditmanagerAssessmentDelegationOutputSchema>
  & z.output<typeof AwsAuditmanagerAssessmentDelegationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/auditmanager_assessment_delegation

export function AwsAuditmanagerAssessmentDelegation(
  props: Partial<AwsAuditmanagerAssessmentDelegationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_auditmanager_assessment_delegation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAuditmanagerAssessmentDelegationInputSchema}
      _outputSchema={AwsAuditmanagerAssessmentDelegationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAuditmanagerAssessmentDelegation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAuditmanagerAssessmentDelegationOutputProps>(
    AwsAuditmanagerAssessmentDelegation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAuditmanagerAssessmentDelegations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAuditmanagerAssessmentDelegationOutputProps>(
    AwsAuditmanagerAssessmentDelegation,
    idFilter,
    baseNode,
    optional,
  )
