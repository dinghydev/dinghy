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
  framework_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  assessment_reports_destination: resolvableValue(
    z.object({
      destination: z.string(),
      destination_type: z.string(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  roles: resolvableValue(
    z.object({
      role_arn: z.string(),
      role_type: z.string(),
    }).array().optional(),
  ),
  scope: resolvableValue(
    z.object({
      aws_accounts: z.object({
        id: z.string(),
      }).array().optional(),
      aws_services: z.object({
        service_name: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  roles_all: z.object({
    role_arn: z.string(),
    role_type: z.string(),
  }).array().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/auditmanager_assessment

export function AwsAuditmanagerAssessment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_auditmanager_assessment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAuditmanagerAssessment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsAuditmanagerAssessment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAuditmanagerAssessments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsAuditmanagerAssessment,
    idFilter,
    baseNode,
    optional,
  )
