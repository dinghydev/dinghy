import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/auditmanager_assessment_delegation

export const InputSchema = z.object({
  assessment_id: resolvableValue(z.string()),
  control_set_id: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  role_type: resolvableValue(z.string()),
  comment: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  delegation_id: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAuditmanagerAssessmentDelegation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_auditmanager_assessment_delegation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAuditmanagerAssessmentDelegation = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsAuditmanagerAssessmentDelegation, node, id)

export const useAwsAuditmanagerAssessmentDelegations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsAuditmanagerAssessmentDelegation, node, id)
