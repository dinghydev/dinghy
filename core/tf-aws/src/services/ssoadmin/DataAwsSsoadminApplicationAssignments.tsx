import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSsoadminApplicationAssignmentsInputSchema = TfMetaSchema
  .extend({
    application_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsSsoadminApplicationAssignmentsOutputSchema = z.object({
  application_assignments: z.object({
    application_arn: z.string(),
    principal_id: z.string(),
    principal_type: z.string(),
  }).array().optional(),
  id: z.string().optional(),
})

export type DataAwsSsoadminApplicationAssignmentsInputProps =
  & z.input<typeof DataAwsSsoadminApplicationAssignmentsInputSchema>
  & NodeProps

export type DataAwsSsoadminApplicationAssignmentsOutputProps =
  & z.output<typeof DataAwsSsoadminApplicationAssignmentsOutputSchema>
  & z.output<typeof DataAwsSsoadminApplicationAssignmentsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssoadmin_application_assignments

export function DataAwsSsoadminApplicationAssignments(
  props: Partial<DataAwsSsoadminApplicationAssignmentsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_application_assignments'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsoadminApplicationAssignmentsInputSchema}
      _outputSchema={DataAwsSsoadminApplicationAssignmentsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSsoadminApplicationAssignmentss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsoadminApplicationAssignmentsOutputProps>(
    DataAwsSsoadminApplicationAssignments,
    idFilter,
    baseNode,
    optional,
  )
