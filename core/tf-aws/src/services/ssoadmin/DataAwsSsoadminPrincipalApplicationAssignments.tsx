import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSsoadminPrincipalApplicationAssignmentsInputSchema =
  TfMetaSchema.extend({
    instance_arn: resolvableValue(z.string()),
    principal_id: resolvableValue(z.string()),
    principal_type: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsSsoadminPrincipalApplicationAssignmentsOutputSchema = z
  .object({
    application_assignments: z.object({
      application_arn: z.string().optional(),
      principal_id: z.string().optional(),
      principal_type: z.string().optional(),
    }).array().optional().optional(),
    id: z.string().optional(),
  })

export type DataAwsSsoadminPrincipalApplicationAssignmentsInputProps =
  & z.input<typeof DataAwsSsoadminPrincipalApplicationAssignmentsInputSchema>
  & NodeProps

export type DataAwsSsoadminPrincipalApplicationAssignmentsOutputProps =
  & z.output<typeof DataAwsSsoadminPrincipalApplicationAssignmentsOutputSchema>
  & z.output<typeof DataAwsSsoadminPrincipalApplicationAssignmentsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssoadmin_principal_application_assignments

export function DataAwsSsoadminPrincipalApplicationAssignments(
  props: Partial<DataAwsSsoadminPrincipalApplicationAssignmentsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_principal_application_assignments'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsoadminPrincipalApplicationAssignmentsInputSchema}
      _outputSchema={DataAwsSsoadminPrincipalApplicationAssignmentsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSsoadminPrincipalApplicationAssignmentss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsoadminPrincipalApplicationAssignmentsOutputProps>(
    DataAwsSsoadminPrincipalApplicationAssignments,
    idFilter,
    baseNode,
    optional,
  )
